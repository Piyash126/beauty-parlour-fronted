import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../authentication/context/providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const {
    data: isAdmin = false, // default value false
    isLoading: isAdminLoading,
  } = useQuery({
    queryKey: ["isAdmin", user?.email], // email change হলে query পুনরায় চলবে
    enabled: !!user?.email, // ✅ email না পাওয়া পর্যন্ত API কল হবে না
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      console.log("Admin check response:", res.data);
      return res.data?.admin;
    },
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
