const User = ({ users }) => {
  return (
    <div>
      {users.name} - {users.username}
    </div>
  );
};

export default User;
