<!DOCTYPE HTML>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--><html class="no-js"><!--<![endif]-->
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,target-densitydpi=device-dpi, user-scalable=no" />
	<link rel="icon" href="<?= base_url('assets/admin/images/favicon.ico'); ?>" type="image/icon" />
    <meta name="description" content="Backend UI" />
    <meta name="author" content="SPADA Digital Consulting" />
    <title>SPADA - <?= $title; ?></title>
    <?php
    if($wogc == false){
        foreach($css_files as $file): ?>
            <link type="text/css" rel="stylesheet" href="<?php echo $file; ?>" />
    <?php endforeach;} ?>
	<link rel="stylesheet" href="<?= base_url('assets/admin/css/normalize.css'); ?>" type="text/css" media="screen">
	<link rel="stylesheet" href="<?= base_url('assets/admin/css/grid.css'); ?>" type="text/css" media="screen">
	<link rel="stylesheet" href="<?= base_url('assets/admin/css/style.css') ?>" type="text/css" media="screen">
    <link rel="stylesheet" href="<?= base_url('assets/admin/css/fontawesome-all.min.css') ?>" type="text/css" media="screen">
    <script type="text/javascript" src="<?= base_url('assets/admin/js/jquery-1.9.1.min.js'); ?>"></script>
    <script src="<?php echo base_url();?>assets/resources/sweetalert2.min.js"></script>
    <script src="<?php echo base_url();?>assets/resources/bootstrap.min.js"></script>
    <?php 
    if($wogc == false){
        foreach($js_files as $file): 
    ?>
            <script src="<?php echo $file; ?>"></script>
    <?php
     endforeach;
    } 
    ?>
    <style type="text/css">
        .gc-container{
            height:100px;
            padding: 0;
        }
        .gc-container .table-container{
            background : white;
            color : black;
        }
        .img-thumbnail{
            width : 300px;
            display: inline-block;
        }
    </style>
</head>
    <body>
        <?php if ($this->session->flashdata('success')): ?>
            <script>
                swal({
                    title: "Success",
                    text: "<?php echo $this->session->flashdata('success'); ?>",
                    timer: 2500,
                    showConfirmButton: false,
                    type: 'success'
                });
            </script>
        <?php endif; ?>
        <?php if ($this->session->flashdata('failed')): ?>
            <script>
                swal({
                    title: "Error",
                    text: "<?php echo $this->session->flashdata('failed'); ?>",
                    timer: 2500,
                    showConfirmButton: false,
                    type: 'error'
                });
            </script>
        <?php endif; ?>
    <div id="main" class="group">
        <div id="left-panel" class="col">
            <div id="logo">
                <img src="<?= base_url('assets/admin/images/logo.png');?>">
            </div>
            <div id="left-navigation">
                <ul class="main-menu">
                    <li class="menu-item">
                        <a href="<?= base_url('/');?>"><i class="fas fa-tachometer-alt"></i>Dashboard</a>
                    </li>
                    <?php
                        $menuParent = $this->db->where('menuParent',0)
                                               ->where('menuDelete',0)
                                               ->order_by('menuName','asc')
                                               ->get('menus')
                                               ->result();
                    
                    foreach($menuParent as $parent){ 
                        $subParent = $this->db->where('menuParent', $parent->menuId)
                                              ->where('menuDelete',0)
                                              ->order_by('menuName','asc')
                                              ->get('menus')
                                              ->result();
                    ?>
                        
                        <li class="menu-item">
                            <a href="#"><i class="<?= $parent->menuIcon;?>"></i><?= $parent->menuName; ?></a>
                            <ul class="sub-menu">
                                <?php
                                foreach($subParent as $sub){ ?>
                                    <li class="sub-menu-item">
                                        <a href="<?= base_url($sub->menuUrl); ?>"><?= $sub->menuName;?></a>
                                    </li>
                               <?php 
                                    }
                                ?>
                                <!-- // <li class="sub-menu-item">
                                //     <a href="#">View All</a>
                                // </li> -->
                            </ul>
                        </li>
                <?php    
                    }
                ?>
                    <!-- <li class="menu-item">
                        <a href="#"><i class="fas fa-user-tie"></i>Supplier</a>
                        <ul class="sub-menu">
                            <li class="sub-menu-item">
                                <a href="#">Add New</a>
                            </li>
                            <li class="sub-menu-item">
                                <a href="#">View All</a>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item">
                        <a href="#"><i class="fas fa-ship"></i>Kapal</a>
                        <ul class="sub-menu">
                            <li class="sub-menu-item">
                                <a href="#">Add New</a>
                            </li>
                            <li class="sub-menu-item">
                                <a href="#">View All</a>
                            </li>
                        </ul>
                    </li> -->
                </ul>
            </div>
        </div>
        <div id="content" class="group">
            <div id="top-panel">
                <div class="top-wrapper">
                    <div id="page-title" class="left">
                        <h1><?= $title; ?></h1>
                    </div>
                    <div id="user-account" class="right">
                        <a href="#"><span><?= $this->session->userdata('adminName');?></span></a>
                    </div>
                    <div id="notification" class="right">
                        <a href="#"><i class="fas fa-bell"></i></a>
                    </div>
                    <div id="search-panel" class="right">
                        <form>
                            <input type="text" name="search" placeholder="Search">
                            <span>
                                <input type="button" value="">
                                <i class="fas fa-search"></i>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        <div id="content-wrapper" class="group">