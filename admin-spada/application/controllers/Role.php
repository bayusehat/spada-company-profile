<?php 

defined('BASEPATH') OR exit('No direct script access allowed');

class Role extends CI_Controller {

	
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

		$c->set_subject('Role');
		$c->set_table('roles');
		$c->where('roleDelete',0);
		$c->order_by('roleCreate','DESC');
		$c->columns('roleName','roleUpdate');
		$c->display_as('roleName','Name')
		  ->display_as('roleUpdate','Updated');
		$c->required_fields([
			'roleName',
		]);
		$c->set_field_upload('bannerImage','assets/uploads/banner');
		$c->unset_clone();
		$c->unset_fields('roleCreate','roleUpdate','roleDelete');
        $c->callback_delete(array($this, 'delete_role'));
		$title = 'Data Role';
		$this->load->vars( array(
			'title' => $title,
			'wogc' => false
		));
		$output = $c->render();
		$this->load->view('data/data', $output);
    }

    public function delete_role($primary_key)
    {
        return $this->db->update('roles',['roleDelete' =>1],['roleId' => $primary_key]);
    }

}

/* End of file Role.php */
