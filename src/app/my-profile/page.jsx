import React from 'react';
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@heroui/react';
import ProfileUpdate from '@/components/ProfileUpdate';

const MyProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;

    return (
        <div className="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-6 md:space-y-8">
            {/* Header Title */}
            <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                    My Profile
                </h1>
                <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-1">
                    Manage and view your user information
                </p>
            </div>

            {/* Desktop View: User Information Table */}
            <div className="hidden md:block overflow-x-auto rounded-2xl border border-gray-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-800 text-xs font-semibold uppercase text-gray-500 dark:text-slate-400">
                        <tr>
                            <th className="py-4 px-6">Profile Picture</th>
                            <th className="py-4 px-6">Name</th>
                            <th className="py-4 px-6">Email</th>
                            <th className="py-4 px-6">User ID</th>
                            <th className="py-4 px-6">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-slate-800 text-sm">
                        <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-800/50 transition-colors">
                            <td className="py-4 px-6">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-500 shrink-0 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                    {user?.image ? (
                                        <Image
                                            src={user.image}
                                            alt={user?.name || "User Avatar"}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                                            {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                                        </span>
                                    )}
                                </div>
                            </td>

                            <td className="py-4 px-6 font-bold text-gray-900 dark:text-white text-base">
                                {user?.name || "N/A"}
                            </td>

                            <td className="py-4 px-6 font-medium text-emerald-600 dark:text-emerald-400">
                                {user?.email || "N/A"}
                            </td>

                            <td className="py-4 px-6 font-mono text-xs text-gray-500 dark:text-slate-400">
                                {user?.id || user?._id || "N/A"}
                            </td>

                            <td className="py-4 px-6">
                                <ProfileUpdate user={user} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Mobile View: User Card */}
            <div className="block md:hidden bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-5">
                <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-500 shrink-0 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        {user?.image ? (
                            <Image
                                src={user.image}
                                alt={user?.name || "User Avatar"}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                                {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                            </span>
                        )}
                    </div>
                    <div className="overflow-hidden">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white truncate">
                            {user?.name || "N/A"}
                        </h2>
                        <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium truncate">
                            {user?.email || "N/A"}
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-100 dark:border-slate-800 pt-4 space-y-3">
                    <div>
                        <span className="text-xs text-gray-400 uppercase font-semibold block">User ID</span>
                        <span className="text-xs font-mono text-gray-600 dark:text-slate-400 break-all">
                            {user?.id || user?._id || "N/A"}
                        </span>
                    </div>

                    <div className="pt-2">
                        <ProfileUpdate user={user} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;