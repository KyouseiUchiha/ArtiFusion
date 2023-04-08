
const ProfileIcon = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 1000,
      }}
    >
      <figure className="image is-48x48 ">
        <img
          className="is-rounded bg-blue-100 mt-3"
          src="/img/profile_default.png"
          alt="Profile"
        />
      </figure>
    </div>
  );
};

export default ProfileIcon;
