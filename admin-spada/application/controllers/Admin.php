<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('Admin_model','admin');
    }

    public function index()
    {
        if($this->session->userdata('isLogged')){
            $data = [
                'title' => 'Dashboard',
                'wogc' => true,
            ];
            $this->load->view('dashboard', $data);
        }else{
            $this->load->view('login');
        }
    }
    
    public function doLogin()
    {
        if($this->admin->login()){
            $this->session->set_flashdata('success', 'Selamat datang '.$username);
            redirect('/','refresh');
        }else{
            $this->session->set_flashdata('failed', 'Username atau Password Salah');
            redirect('/','refresh');
        }
    }

    public function adminTable()
    {
        if(!$this->session->userdata('isLogged')){
            redirect('/','refresh');
            if(!$this->session->userdata('roleId') == 1){
                $this->session->set_flashdata('failed', 'Anda tidak memiliki Akses');
                redirect('/','refresh');
            }
        }
        $c = new grocery_CRUD();

		$c->set_subject('Admin');
		$c->set_table('admins');
		$c->where('adminDelete',0);
		$c->order_by('adminCreate','DESC');
		$c->columns('adminName','roleId','adminUsername');
		$c->display_as('adminName','Name')
		  ->display_as('roleId','Role')
		  ->display_as('adminUsername','Username')
          ->display_as('adminPassword','Password');
		$c->required_fields([
			'adminName',
			'adminUsername',
			'adminPassword'
        ]);
        $c->set_relation('roleId','roles','roleName');
        $c->field_type('adminPassword', 'password');
		$c->unset_clone();
        $c->unset_fields('adminCreate','adminUpdate','adminDelete');
        $c->callback_before_insert([$this,'encrypt']);
        // $c->callback_before_update([$this,'encrypt']);
        $c->callback_delete(array($this, 'delete_admin'));
		$title = 'Data Admin';
		$this->load->vars( array(
			'title' => $title,
			'wogc' => false
		));
		$output = $c->render();
		$this->load->view('data/data', $output);
    }

    public function encrypt($post_array)
    {
        $password = md5($post_array['adminPassword']);

        return $post_array;
    }

    public function delete_admin($primary_key)
    {
        return $this->db->update('admins',['adminDelete' => 1],['adminId' => $primary_key]);
    }

}

/* End of file Admin.php */
