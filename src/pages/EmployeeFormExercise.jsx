import React from 'react';
import { useForm } from "react-hook-form";

function EmployeeFormExercise() {

    const { register, handleSubmit } = useForm();

    const onSave = (data) => {
        console.log(data);
    }

  return (
    <section className="min-h-screen w-full flex justify-center items-center py-10 px-4">
      <form onSubmit = {handleSubmit(onSave)} className="w-full max-w-xl mx-auto p-6 space-y-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Form Data Karyawan</h2>

        {/* Field 1: Nama */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nama Lengkap
          </label>
          <input
            {...register("name", {
                required: 'Nama harus diisi',
                minLength: { value: 5, message: 'Minimal 5 karakter' }
            })}
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Masukkan nama lengkap"
          />
        </div>

        {/* Field 2: Alamat (Textarea) */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Alamat
          </label>
          <textarea
            {...register("address", {
                required: 'Alamat harus diisi',
                minLength: { value: 10, message: 'Minimal 10 karakter' }
            })}
            id="address"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="Masukkan alamat domisili"
          />
        </div>

        {/* Field 3: Nomor Telepon */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Nomor Telepon
          </label>
          <input
            {...register("phone", {
                required: 'Nomor telepon harus diisi',
                minLength: { value: 10, message: 'Minimal 10 karakter' }
            })}
            id="phone"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="tel"
            placeholder="Contoh: 08123456789"
          />
        </div>

        {/* Field 4: NIK */}
        <div>
          <label htmlFor="nik" className="block text-sm font-medium text-gray-700 mb-1">
            NIK
          </label>
          <input
            {...register("nik", {
                required: 'NIK harus diisi',
            })}
            id="nik"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Nomor Induk Kependudukan"
          />
        </div>

        {/* Field 5: Pekerjaan (Select) */}
        <div>
          <label htmlFor="job" className="block text-sm font-medium text-gray-700 mb-1">
            Pekerjaan
          </label>
          <select
            {...register("job", {
                required: 'Pekerjaan harus diisi',
            })}
            id="job"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Pilih Pekerjaan</option>
            <option value="pns">PNS</option>
            <option value="swasta">Pegawai Swasta</option>
          </select>
        </div>

        {/* Field 6: Status (Radio Button) */}
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">
            Status Pernikahan
          </span>
          <div className="flex space-x-4 mt-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="status" value="menikah" {...register("status")} />
              <span className="text-sm text-gray-700">Menikah</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="status" value="belum_menikah" {...register("status")} />
              <span className="text-sm text-gray-700">Belum Menikah</span>
            </label>
          </div>
        </div>

        <button
          className="w-full flex justify-center py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
          type="submit"
        >
          Simpan Data
        </button>
      </form>
    </section>
  );
}

export default EmployeeFormExercise;