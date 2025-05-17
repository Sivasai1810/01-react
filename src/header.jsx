import React from 'react';
function Header() {
  console.log('function rendered');
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
}
export default React.memo(Header);
