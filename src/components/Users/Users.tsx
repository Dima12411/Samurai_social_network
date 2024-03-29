import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";

export type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<number>
    users: Array<UsersType>
    onPageChanged: (pageNumber: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    followingInUserProgress: (userId: number, isFetching: boolean) => void
}

const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span key={p}
                                 className={props.currentPage === p ? s.selectedPage : s.page}
                                 onClick={() => props.onPageChanged(p)}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => {
                    return <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                     className={s.userPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button className={s.button}
                                              disabled={props.followingInProgress.some(id => id === u.id)}
                                              onClick={() => { props.unfollow(u.id) }}>
                                        Unfollow</button>
                                    : <button className={s.button}
                                              disabled={props.followingInProgress.some(id => id === u.id)}
                                              onClick={() => { props.follow(u.id) }}>
                                        Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                                <div></div>
                            </span>
                        </span>
                    </div>
                })
            }
        </div>
    )
};

export default Users;