<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Config extends CI_Controller {

	
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

		$c->set_subject('Config');
		$c->set_table('configs');
		$c->where('configDelete',0);
		$c->order_by('configCreate','DESC');
		$c->columns('configWebName','configTitle','configCreate','configUpdate');
		$c->display_as('configWebName','Name')
		  ->display_as('configTitle','Title')
		  ->display_as('configCreate','Create')
		  ->display_as('configUpdate','Updated');
		$c->unset_columns('configOfficeHour','configDescription','configDelete');
		$c->unset_fields('configCreate','configUpdate','configDelete');
		$c->unset_clone();
        $c->callback_delete(array($this, 'delete_config'));
		$title = 'Data Config';
		$this->load->vars( array(
			'title' => $title,
			'wogc' => false
		));
		$output = $c->render();
		$this->load->view('data/data', $output);
    }

    public function delete_config($primary_key)
    {
        return $this->db->update('configs',['configDelete' => 1],['configId' => $primary_key]);
    }

}

/* End of file Config.php */
