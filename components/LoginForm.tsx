"use client";

import { useState } from "react";

export function LoginForm() {
  const [message, setMessage] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage(
      "The client portal is being connected. Email info@casafrutas.com if you need access now.",
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Login.</h1>
      <p className="login-lede">
        Client portal for Casa Frutas buyers. Email info@casafrutas.com if you need
        access now.
      </p>
      <div className="field">
        <label htmlFor="login-email">Email</label>
        <input id="login-email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
        />
      </div>
      <button className="btn mt-4" type="submit">
        Enter
      </button>
      {message ? (
        <p role="status" className="mt-4 max-w-sm">
          {message}
        </p>
      ) : null}
    </form>
  );
}
