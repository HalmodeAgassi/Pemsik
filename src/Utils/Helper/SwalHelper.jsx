import Swal from "sweetalert2";

/**
 * Fungsi konfirmasi logout
 * @returns Promise dari SweetAlert2
 */
export const confirmLogout = () => {
  return Swal.fire({
    title: "Yakin ingin logout?",
    text: "Kamu akan keluar dari sesi ini.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, logout!",
    cancelButtonText: "Batal",
  });
};
