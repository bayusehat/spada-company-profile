<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Category extends CI_Controller {

	
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

		$c->set_subject('Category');
		$c->set_table('categories');
		$c->where('categoryDelete',0);
		$c->order_by('categoryCreate','DESC');
		$c->columns('categoryName','categoryUpdate');
		$c->display_as('categoryName','Name')
	      ->display_as('categoryDescription','Description')
		  ->display_as('categoryUpdate','Updated');
		$c->required_fields([
			'categoryName',
		]);
		$c->unset_clone();
		$c->unset_fields('categoryCreate','categoryUpdate','categoryDelete');
        $c->callback_delete(array($this, 'delete_category'));
		$title = 'Data Category';
		$this->load->vars( array(
			'title' => $title,
			'wogc' => false
		));
		$output = $c->render();
		$this->load->view('data/data', $output);
    }

    public function delete_category($primary_key)
    {
        return $this->db->update('categories',['categoryDelete' => 1],['categoryId' => $primary_key]);
    }

}

/* End of file Category.php */
