<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Service extends CI_Controller {

	
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

		$c->set_subject('Service');
		$c->set_table('services');
		$c->where('serviceDelete',0);
		$c->order_by('serviceCreate','DESC');
		$c->columns('serviceImage','serviceName','serviceUpdate');
		$c->display_as('serviceImage','Image')
          ->display_as('serviceName','Name')
          ->display_as('serviceUpdate','Updated');
		$c->unset_clone();
		$c->unset_fields('serviceCreate','serviceUpdate','serviceDelete');
        $c->callback_delete(array($this, 'delete_service'));
		$title = 'Data Config';
		$this->load->vars( array(
			'title' => $title,
			'wogc' => false
		));
		$output = $c->render();
		$this->load->view('data/data', $output);
    }

    public function delete_service($primary_key)
    {
        return $this->db->update('services',['serviceDelete' => 1],['serviceId' => $primary_key]);
    }

}

/* End of file Service.php */
