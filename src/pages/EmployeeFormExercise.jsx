import React from 'react';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";

function EmployeeFormExercise() {

    const { register, handleSubmit, setValues, formState: { errors }, reset, trigger } = useForm({
      mode: 'onChange'
    });

    const onSave = (data) => {
        console.log(data);
        reset();
    }

    useEffect(() => {
      setValues({
        name: 'Muhammad Garuda Pratama',
        address: 'Tangerang Selatan',
        phone: '081279265845',
        nik: '1234567890123456',
        job: 'Pegawai Swasta',
        status: 'menikah',
        age: 24,
        password: 'Garuda281209.'
      })

      trigger();
    }, [])

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
                minLength: { value: 5, message: 'Minimal 5 karakter' },
                maxLength: { value: 50, message: 'Maksimal 50 karakter' }
            })}
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Masukkan nama lengkap"
          />
        </div>

        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}

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

        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}

        {/* Field 3: Nomor Telepon */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Nomor Telepon
          </label>
          <input
            {...register("phone", {
                required: 'Nomor telepon harus diisi',
                minLength: { value: 11, message: 'Minimal 10 karakter' },
                maxLength: { value: 13, message: 'Maksimal 13 karakter' }
            })}
            id="phone"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="tel"
            placeholder="Contoh: 08123456789"
          />
        </div>

        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}

        {/* Field 4: NIK */}
        <div>
          <label htmlFor="nik" className="block text-sm font-medium text-gray-700 mb-1">
            NIK
          </label>
          <input
            {...register("nik", {
                required: 'NIK harus diisi',
                minLength: { value: 16, message: 'Harus 16 karakter' },
                maxLength: { value: 16, message: 'Harus 16 Karakter'}
            })}
            id="nik"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Nomor Induk Kependudukan"
          />
        </div>

        {errors.nik && <p className="text-red-500 text-xs mt-1">{errors.nik.message}</p>}

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
            <option value="PNS">PNS</option>
            <option value="Pegawai Swasta">Pegawai Swasta</option>
          </select>
        </div>

        {errors.job && <p className="text-red-500 text-xs mt-1">{errors.job.message}</p>}

        {/* Field 6: Status (Radio Button) */}
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">
            Status Pernikahan
          </span>
          <div className="flex space-x-4 mt-2" {...register("status", {
            required: 'Status pernikahan harus diisi',
          })}>
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

        {errors.status && <p className="text-red-500 text-xs mt-1">{errors.status.message}</p>}

        {/* Field 7: Umur */}
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
            Umur
          </label>
          <input
            {...register("age", {
                required: 'Umur harus diisi',
                min: { value: 1, message: 'Minimal 1 tahun' },
                max: { value: 63, message: 'Maksimal 63 tahun' }
            })}
            id="age"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            placeholder="Contoh: 17"
          />
        </div>

        {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>}

        {/* Field 8: Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            {...register("password", {
                required: 'Password harus diisi',
                minLength: { value: 8, message: 'Minimal 8 karakter' },
                pattern: {value: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/, message: 'Password harus mengandung huruf besar, angka, dan karakter khusus'}
            })}
            id="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Masukkan password"
          />
        </div>

        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}

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