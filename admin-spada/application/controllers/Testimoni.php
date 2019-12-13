<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Testimoni extends CI_Controller {

    public function index()
    {
        $c = new grocery_CRUD();

		$c->set_subject('Testimoni');
		$c->set_table('testimonis');
		$c->where('testimoniDelete',0);
		$c->order_by('testimoniCreate','DESC');
		$c->columns('testimoniName','testimoniStatus','testimoniCreate');
        $c->display_as('testimoniName','Testimoni Name')
          ->display_as('testimoniWork','Testimoni Work')
          ->display_as('testimoniContent','Testimoni Content')
          ->display_as('testimoniStatus','Status')
          ->display_as('testimoniCreate','Created');
        $c->unset_texteditor('testimoniContent','fulltext');
		$c->unset_clone();
		$c->unset_fields('testimoniCreate','testimoniUpdate','testimoniDelete');
        $c->callback_delete(array($this, 'delete_testimoni'));
		$title = 'Data Testimoni';
		$this->load->vars( array(
			'title' => $title,
			'wogc' => false
		));
		$output = $c->render();
		$this->load->view('data/data', $output);
    }

    public function delete_testimoni($primary_key)
    {
        return $this->db->update('testimonis',['testimoniDelete' => 1],['testimoniId' => $primary_key]);
    }

}

/* End of file Testimoni.php */
