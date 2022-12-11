import React, { useState } from 'react'
import { AvField } from "availity-reactstrap-validation"
import { FaEye, FaEyeSlash } from "react-icons/fa";

function ResetForm() {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword(current => !current)
    const toggleConfirmPassword = () => setConfirmShowPassword(current => !current)

    return (
        <div>
            <div className="mb-3">
                <div onClick={toggleShowPassword} className='text-end show-password' htmlFor="password">
                    {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                    {showPassword ? "Hide" : "Show"} password
                </div>
                <AvField
                    name="password"
                    type={!showPassword ? "password" : "text"}
                    placeholder="Enter your new password"
                    required
                />
            </div>
            <div className="mb-3">
                <div onClick={toggleConfirmPassword} className='text-end show-password' htmlFor="password">
                    {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                    {showConfirmPassword ? "Hide" : "Show"} password
                </div>
                <AvField
                    name="passwordConfirm"
                    type={!showConfirmPassword ? "password" : "text"}
                    placeholder="Confirm your password"
                    required
                />
            </div>
        </div>
    )
}

export default ResetForm