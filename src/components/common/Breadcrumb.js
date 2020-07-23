import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../redux/SessionDuck";
import { checkIfEmptyOject } from "../../utils/utils";
import styled from "styled-components";
import avatar from "../../assets/Avatar.png";

const UserImg = styled.img`
  width: 40px;
`;

const Breadcrumb = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser, breadcrumbText } = useSelector((state) => state.session);

  useEffect(() => {
    if (checkIfEmptyOject(currentUser)) {
      history.push("/login");
    }
  }, [currentUser, history]);

  const handleClick = (e) => {
    dispatch(logout());
  };

  return (
    <div id="breadcrumbCell" className="uk-width-1-1">
      <div className="uk-float-left">
        <h2 className="uk-text-muted uk-padding uk-padding-remove-top uk-padding-remove-bottom">
          {breadcrumbText}
        </h2>
      </div>
      <div className="uk-float-right">
        {currentUser && (
          <div
            id="userInfo"
            className="uk-flex uk-flex-column uk-flex-right uk-padding uk-padding-remove-top uk-padding-remove-bottom"
          >
            <div className="uk-flex uk-flex-middle">
              <UserImg src={avatar} alt="avatar" />
              <span>
                {currentUser.user.name} {currentUser.user.lastName}
              </span>
            </div>
            <button
              className="uk-button uk-button-link uk-flex uk-flex-right"
              onClick={handleClick}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Breadcrumb;
