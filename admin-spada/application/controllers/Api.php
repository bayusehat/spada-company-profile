<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . 'libraries/RestController.php';

class Api extends RestController {

    public function service_get()
    {
        $service = $this->db->where('serviceDelete',0)->get('services')->result();
        $data = [
            'status' => 200,
            'result' => $service
        ];

        $this->response($data, REST_Controller::HTTP_OK);
    }

}

/* End of file Api.php */
