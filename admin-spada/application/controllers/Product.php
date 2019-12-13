<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Product extends CI_Controller {
    
    
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

		$c->set_subject('Product');
		$c->set_table('products');
		$c->where('productDelete',0);
		$c->order_by('productCreate','DESC');
		$c->columns('productImage','categoryId','productName','productUpdate');
		$c->display_as('productName','Name')
		  ->display_as('productImage','Image')
		  ->display_as('productUpdate','Updated');
        $c->set_relation('categoryId','categories','categoryName');
        $c->set_field_upload('productImage','assets/uploads/product');
        $c->required_fields([
            'categoryId',
            'productName',
            'productImage',
        ]);
        $c->unset_clone();
        $c->unset_fields('productCreate','productUpdate','productDelete');
        $c->callback_delete(array($this, 'delete_product'));
		$title = 'Data Product';
		$this->load->vars( array(
			'title' => $title,
			'wogc' => false
		));
		$output = $c->render();
		$this->load->view('data/data', $output);
    }

    public function delete_product($primary_key)
    {
        return $this->db->update('products',['productDelete' => 1],['productId' => $primary_key]);
    }

    public function image_product($value,$row)
    {
        return '<img src="'.base_url('assets/upload/product/'.$row->productImage).'" class="img-thumbnail" alt="'.$row->productImage.'">';
    }

}

/* End of file Product.php */
