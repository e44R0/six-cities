export const LoadSpinner = (): JSX.Element => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '10vh',
    }}
  >
    <p>Loading...</p>
    <div>🔄</div>
  </div>
);
