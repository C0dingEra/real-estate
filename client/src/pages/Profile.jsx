import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice.js';

export const Profile = () => {
    const fileRef = useRef(null);
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);

    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [isUploading, setIsUploading] = useState(false); // Track if upload is in progress

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('image', file);

        try {
            setUploadProgress(0); // Reset progress
            setUploadSuccess(false); // Reset success message
            setIsUploading(true); // Start the upload

            // Axios request with progress tracking
            const res = await axios.post('/api/user/upload-profile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress: (progressEvent) => {
                    const percent = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                    );
                    setUploadProgress(percent); // Update progress
                },
            });

            const imageUrl = res.data.imageUrl;
            dispatch(signInSuccess({ ...currentUser, avatar: imageUrl }));
            setUploadSuccess(true); // Set success when upload completes
        } catch (err) {
            console.error('Upload failed:', err);
            setUploadProgress(0); // Reset progress on error
        } finally {
            setIsUploading(false); // Reset uploading state after the process ends
        }
    };

    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl font-semibold text-center my-4">Profile</h1>
            <form className="flex flex-col gap-4">
                <input
                    type="file"
                    ref={fileRef}
                    hidden
                    onChange={handleFileChange}
                    accept="image/*"
                />
                <img
                    onClick={() => fileRef.current.click()}
                    className="rounded-full h-20 w-20 cursor-pointer self-center"
                    src={currentUser.avatar}
                    alt="profile"
                />

                {/* Upload Progress Bar (only visible while uploading) */}
                {isUploading && (
                    <div className="mt-4">
                        <div className="text-gray-600 mb-2">Upload Progress:</div>
                        <div className="w-full bg-gray-300 rounded-full h-2">
                            <div
                                className="bg-green-500 h-2 rounded-full"
                                style={{ width: `${uploadProgress}%` }}
                            ></div>
                        </div>
                        <div className="text-center mt-2 text-sm text-gray-500">
                            {uploadProgress}% uploaded
                        </div>
                    </div>
                )}

                {/* Upload Success Message */}
                {uploadSuccess && uploadProgress === 100 && (
                    <div className="text-center text-green-600">
                        Image uploaded successfully!
                    </div>
                )}

                <input
                    type="username"
                    placeholder="Username"
                    autoComplete="username"
                    id="username"
                    className="border border-slate-300 outline-none p-3 rounded-lg"
                />
                <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    autoComplete="email"
                    className="border border-slate-300 outline-none p-3 rounded-lg"
                />
                <input
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    id="password"
                    className="border border-slate-300 outline-none p-3 rounded-lg"
                />
                <button className="uppercase bg-slate-700 p-3 hover:opacity-95 disabled:opacity-80 rounded-lg cursor-pointer text-white">
                    Update
                </button>
            </form>
            <div className="flex justify-between mt-2">
                <span className="text-red-700 cursor-pointer">Delete account</span>
                <span className="text-red-700 cursor-pointer">Sign Out</span>
            </div>
        </div>
    );
};
