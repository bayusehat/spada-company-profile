<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Menu extends CI_Controller {

    
    public function __construct()
    {
        parent::__construct();
        if(!$this->session->userdata('isLogged')){
			redirect('/','refresh');
		}
    }
    
    public function index()
    {
        $c = new grocery_CRUD();

		$c->set_subject('Menu');
		$c->set_table('menus');
		$c->where('menuDelete',0);
		$c->order_by('menuCreate','asc');
		// $c->columns('productImage','categoryId','productName','productUpdate');
		$c->display_as('menuName','Name')
		  ->display_as('menuParent','Parent')
          ->display_as('menuUrl','URL')
          ->display_as('menuActiveParent','Parent Active')
          ->display_as('menuActiveUrl','URL Active')
          ->display_as('menuIcon','Icon');
        $c->required_fields([
            'menuName',
            'menuUrl',
            'menuParent',
            'menuActiveParent',
            'menuActiveUrl'
        ]);
        $c->unset_clone();
        $c->callback_column('menuParent',array($this, 'parentName'));
        $c->callback_add_field('menuParent',array($this,'parent'));
        $c->callback_edit_field('menuParent',array($this,'parentEdit'));
        $c->unset_fields('menuCreate','menuUpdate','menuDelete');
        $c->callback_delete(array($this, 'delete_menu'));
        $c->unset_columns('menuCreate','menuUpdate','menuDelete');
		$title = 'Data Menu';
		$this->load->vars( array(
			'title' => $title,
            'wogc' => false,
            'parent' => 'setting',
            'active' => 'menu'
		));
		$output = $c->render();
		$this->load->view('data/data', $output);
    }

    public function delete_menu($primary_key)
    {
        return $this->db->update('menus',['menuDelete' => 1],['menuId' => $primary_key]);
    }

    public function parentName($value, $row)
    {
        if($row->menuParent == 0){
            return 'Its Parent!';
        }else{
            $menu = $this->db->where('menuId',$row->menuParent)->get('menus')->row();
            return $menu->menuName;
        }
    }

    public function parent($value, $row)
    {
        $parent = $this->db->where('menuParent',0)
                           ->where('menuDelete',0)
                           ->order_by('menuCreate','asc')
                           ->get('menus')
                           ->result();
        $html = '';
        foreach($parent as $p){
            $html .= '<option value="'.$p->menuId.'">'.$p->menuName.'</option>';
        }
        return '<select name="menuParent" id="menuParent" class="form-control select2">
                    <option value="0">Its Parent!</option>
                    '.$html.'
                </select>';
    }

    public function parentEdit($value, $primary_key)
    {
        $parent = $this->db->where('menuParent',0)
                           ->where('menuDelete',0)
                           ->order_by('menuCreate','asc')
                           ->get('menus')
                           ->result();
        $html = '';
        foreach($parent as $p){
            if($p->menuId == $value){
                $selected = 'selected';
            }else{
                $selected = '';
            }
            $html .= '<option value="'.$p->menuId.'" '.$selected.'>'.$p->menuName.'</option>';
        }
        if($value == 0){
            $selectedParent = 'selected';
        }else{
            $selectedParent = '';
        }
        return '<select name="menuParent" id="menuParent" class="form-control select2">
                    <option value="0" '.$selectedParent.'>Its Parent!</option>
                    '.$html.'
                </select>';
    }

}

/* End of file Menu.php */
