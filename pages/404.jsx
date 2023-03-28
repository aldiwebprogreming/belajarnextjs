import React from "react";
import Link from "next/link";

export default function Notfount() {
  return (
    <div className="container mt-3">
      <div className="jumbotron">
        <h1 className="display-4">
          Hello, halaman yang anda cari tidak di temukan
        </h1>
        <p className="lead">Silahkan kembali ke halaman utama anda</p>
        <hr className="my-4" />

        <p className="lead">
          <Link className="btn btn-primary btn-lg" href={"/"} role="button">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}
