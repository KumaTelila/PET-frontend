import React from 'react'

const Login = () => {
  return (
    <body className="hold-transition login-page">
    <div className="login-box">
      {/* /.login-logo */}
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <a href="../../index2.html" className="h1">
            <b>P</b>ET
          </a>
        </div>
        <div className="card-body">
          <p className="login-box-msg">Sign in</p>

          <form action="" method="post">
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Email" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="password" className="form-control" placeholder="Password" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <div className="icheck-primary">
                  <input type="checkbox" id="remember" />
                </div>
              </div>
              {/* /.col */}
              <div className="col-4">
                <button type="submit" className="btn btn-primary btn-block" onClick={() => (console.log('clicked'))}>Sign In</button>
              </div>
              {/* /.col */}
            </div>
          </form>
          <p className="mb-1">
            <a href="forgot-password.html">I forgot my password</a>
          </p>
          <p className="mb-0">
            <a href="register.html" className="text-center">Register a new membership</a>
          </p>
        </div>
        {/* /.card-body */}
      </div>
      {/* /.card */}
    </div>
    </body>
  )
}

export default Login