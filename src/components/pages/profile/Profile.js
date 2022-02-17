import ImgProfile from "../../Images/avatar.jpg";

const Profile = () => {
  return (
    <div>
      <div className="avatarImg">
        <img
          className="circle responsive-img"
          src={ImgProfile}
          alt="Minh Dat"
        />
      </div>
      <div className="card light-blue darken-4 z-depth-0 hide-on-large-only">
        <div className="card-content center social">
          <h2 className="grey-text text-lighten-3">
            <strong>Minh Dat Trinh</strong>
          </h2>
          <h5 className="grey-text text-darken-1">FrontEnd Developer</h5>
          <a href="https://facebook.com/min.cntt" target="blank">
            <i className="fab fa-facebook-square fa-2x"></i>
          </a>
          <a href="https://twitter.com" target="blank">
            <i className="fab fa-twitter-square fa-2x"></i>
          </a>
          <a href="https://linkedin.com" target="blank">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/minhdattrinh" target="blank">
            <i className="fab fa-github-square fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="card light-blue darken-4 z-depth-0">
        <div className="card-content">
          <h6 className="white-text">
            <strong># PROFILE</strong>
          </h6>
          <hr />
          <p className="grey-text text-lighten-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam earum
            perferendis optio maiores provident dolores quo! Veniam ratione
            recusandae quas repudiandae quia, neque, magnam esse laboriosam
            officia laborum facere ullam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
