import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
 
const EditUser = () => {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [kelas, setKelas] = useState("");
  const [semester, setSemester] = useState("");
  const [alamat, setAlamat] = useState("");
  const [jenis_kelamin, setJenis_Kelamin] = useState("Laki-Laki");
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setNama(response.data.nama);
    setNim(response.data.nim);
    setKelas(response.data.kelas);
    setSemester(response.data.semester);
    setAlamat(response.data.alamat);
    setJenis_Kelamin(response.data.jenis_kelamin);
  };
 
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        nama,
        nim,
        kelas,
        semester,
        alamat,
        jenis_kelamin,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Nama</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="nama"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Nim</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                placeholder="nim"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Kelas</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
                placeholder="kelas"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Semester</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                placeholder="semester"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Alamat</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                placeholder="alamat"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Jenis_kelamin</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={jenis_kelamin}
                  onChange={(e) => setJenis_Kelamin(e.target.value)}
                >
                  <option value="Laki-Laki">Laki-Laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default EditUser;