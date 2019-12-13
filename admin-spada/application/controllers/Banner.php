<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Banner extends CI_Controller {

	
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

		$c->set_subject('Banner');
		$c->set_table('banners');
		$c->where('bannerDelete',0);
		$c->order_by('bannerCreate','DESC');
		$c->columns('bannerImage','bannerTitle','bannerUpdate');
		$c->display_as('bannerImage','Image')
		  ->display_as('bannerTitle','Title')
		  ->display_as('bannerDescription','Description')
		  ->display_as('bannerUpdate','Updated');
		$c->required_fields([
			'bannerTitle',
			'bannerImage',
			'bannerDescription'
		]);
		$c->set_field_upload('bannerImage','assets/uploads/banner');
		$c->unset_clone();
		$c->unset_fields('bannerCreate','bannerUpdate','bannerDelete');
        $c->callback_delete(array($this, 'delete_banner'));
		$title = 'Data Banner';
		$this->load->vars( array(
			'title' => $title,
			'wogc' => false
		));
		$output = $c->render();
		$this->load->view('data/data', $output);
    }

    public function delete_banner($primary_key)
    {
        return $this->db->update('banners',['bannerDelete' => 1],['bannerId' => $primary_key]);
    }

}

/* End of file Banner.php */
