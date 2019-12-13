<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>SPADA Login Admin</title>
        <link rel="icon" href="<?php echo base_url();?>assets/admin/images/icon.png" type="image/png" />
        <link rel="stylesheet" href="<?php echo base_url();?>assets/resources/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/7.11.0/sweetalert2.css" />
        <script src="<?php echo base_url();?>assets/resources/sweetalert2.min.js"></script>
        <script src="<?php echo base_url();?>assets/resources/bootstrap.min.js"></script>
        <style>
            body{
                padding-top: 100px;
                background: #233043;
            }
            .alert{
                display: none;
            }
            #preload{
                display: none;
            }
            .preload{
                width: 50px;
                height: 50px;
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
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                    <img src="<?php echo base_url();?>assets/spada/images/logo.png" alt="logo" style="width:355px;margin-bottom:50px"/>
                    <div class="login-panel panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title" style="text-align:center"> SPADA Login Admin</h3>
                        </div>
                        <div class="panel-body">
                            <form method="POST" action="<?= base_url();?>admin/doLogin">
                                <fieldset>
                                    <div class="form-group">
                                        <input class="form-control" placeholder="Username"  name="username" type="text" id="username">
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" placeholder="Password" name="password" id="password" type="password">
                                    </div>     
                                    <input type="submit" name="submitLogin" class="btn btn-block btn-success" value="Login">
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>