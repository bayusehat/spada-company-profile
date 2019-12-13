<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Contact extends CI_Controller {

	
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

		$c->set_subject('Contact');
		$c->set_table('contacts');
		$c->where('contactDelete',0);
		$c->order_by('contactCreate','DESC');
		$c->columns('contactName','contactPhone');
		$c->display_as('contactName','Name')
		  ->display_as('contactPhone','Phone');
		$c->unset_columns('contactAddress','contactPostalCode','contactEmail','contactImage','contact','contactCreate','contactUpdate','contactDelete');
		$c->unset_clone();
		$c->unset_fields('contactCreate','contactUpdate','contactDelete');
        $c->callback_delete(array($this, 'delete_contact'));
		$title = 'Data Contact';
		$this->load->vars( array(
			'title' => $title,
			'wogc' => false
		));
		$output = $c->render();
		$this->load->view('data/data', $output);
    }

    public function delete_contact($primary_key)
    {
        return $this->db->update('contacts',['configDelete' => 1],['configId' => $primary_key]);
    }

}

/* End of file Contact.php */
