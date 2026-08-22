'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from "@/lib/auth-client"; // Ensure path matches your auth-client file

export default function ProfileUpdate({ user }) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState(user?.name || '');
    const [image, setImage] = useState(user?.image || '');
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // 1. Send update request to Better-Auth API / MongoDB
            const res = await authClient.updateUser({
                name: name,
                image: image,
            });

            if (!res.error) {
                setIsOpen(false);
                // 2. Refresh Server Component data to update the UI
                router.refresh();
            } else {
                console.error("Update failed:", res.error);
            }
        } catch (err) {
            console.error("Failed to update profile:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Update Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm"
            >
                Update
            </button>

            {/* Simple Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl w-full max-w-sm space-y-4 border border-gray-200 dark:border-slate-800 shadow-xl">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Update Profile</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-gray-600 dark:hover:text-slate-200 font-bold"
                            >
                                ✕
                            </button>
                        </div>

                        <form onSubmit={handleUpdate} className="space-y-4">
                            {/* Input 1: Image URL */}
                            <div>
                                <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-slate-300">
                                    Image URL
                                </label>
                                <input
                                    type="url"
                                    required
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    placeholder="https://example.com/photo.jpg"
                                    className="w-full border p-2.5 rounded-xl text-sm dark:bg-slate-800 dark:border-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>

                            {/* Input 2: Name */}
                            <div>
                                <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-slate-300">
                                    User Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter user name"
                                    className="w-full border p-2.5 rounded-xl text-sm dark:bg-slate-800 dark:border-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>

                            {/* Modal Actions */}
                            <div className="flex gap-2 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="w-1/2 border border-gray-300 dark:border-slate-700 py-2.5 rounded-xl text-sm font-semibold text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-1/2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl text-sm font-semibold transition-all shadow-md disabled:opacity-50"
                                >
                                    {loading ? 'Saving...' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}