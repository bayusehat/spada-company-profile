<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_model extends CI_Model {

    public function login()
    {
        $username = $this->input->post('username');
        $password = $this->input->post('password');

        $check = $this->db->where('adminUsername',$username)
                          ->where('adminPassword',md5($password))
                          ->get('admins');
        if($check->num_rows() > 0){
            $admin = $check->row();
            $data = [
                'adminId' => $admin->adminId,
                'roleId'  => $admin->roleId,
                'adminName' => $admin->adminName,
                'adminUsername' => $admin->adminUsername,
                'isLogged' => true
            ];
            $this->session->set_userdata($data);
            return true;
        }else{
            return false;
        }
    }

}

/* End of file Admin_model.php */
