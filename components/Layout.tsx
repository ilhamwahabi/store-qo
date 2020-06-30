export const Layout: React.FC = ({ children }) => (
  <div>
    {children}
    <style jsx global>
      {`
        body {
          margin: 0;
          padding: 0;
        }
      `}
    </style>
  </div>
);
