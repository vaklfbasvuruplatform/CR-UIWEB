// app/not-found.tsx

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div className="page">
          <div className="main">
            <h1>Server Error</h1>

            <div className="error-code">404</div>

            <h2>Page Not Found</h2>

            <p className="lead">
              This page either doesn't exist, or it moved somewhere else.
            </p>

            <hr />

            <p>That's what you can do</p>

            <div className="help-actions">
              <a href="javascript:location.reload();">
                Reload Page
              </a>

              <a href="javascript:history.back();">
                Back to Previous Page
              </a>

              <a href="/">
                Home Page
              </a>
            </div>
          </div>
        </div>

        <style>{`
          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
            background: #f5f5f5;
          }

          .page {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .main {
            text-align: center;
            background: white;
            padding: 50px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,.08);
          }

          h1 {
            font-size: 22px;
            margin-bottom: 20px;
            color: #333;
          }

          .error-code {
            font-size: 90px;
            font-weight: 700;
            color: #111;
          }

          h2 {
            font-size: 28px;
            margin: 10px 0;
          }

          .lead {
            color: #666;
          }

          hr {
            margin: 25px 0;
            border: 0;
            border-top: 1px solid #ddd;
          }

          .help-actions {
            display: flex;
            gap: 15px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .help-actions a {
            padding: 10px 18px;
            border-radius: 6px;
            background: #111;
            color: white;
            text-decoration: none;
            font-size: 14px;
          }

          .help-actions a:hover {
            opacity: .8;
          }
        `}</style>
      </body>
    </html>
  );
}
