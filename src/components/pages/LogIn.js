import React from 'react'
import { Link } from 'react-router-dom'

export default function LogIn() {
  return (
    <div className="container p-4">
            <div className="form col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Login</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">
                            Email
                        </label>
                        <input
                            type={"email"}
                            className="form-control"
                            placeholder="email"
                            autoComplete="off"
                            required
                            name="email"
                            // value={email}
                            // onChange={(e) => onInputChange(e)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Password" className="form-label">
                            Password
                        </label>
                        <input
                            type={"password"}
                            className="form-control"
                            placeholder="password"
                            required
                            name="password"
                            // value={password}
                            // onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="space-x-10">
                    <button type="submit" className="btn btn-outline-primary" onSubmit>
                        Login
                    </button>
                    <Link className="btn btn-danger mx-2" to="/">
                        Cancel
                    </Link>
                </div>
                </form>

            </div>
        </div>
  )
}
