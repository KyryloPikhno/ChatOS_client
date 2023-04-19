const User = ({user, index}) => {
    const {name, email, age} = user;

    return (
        <tr>
            <td>{index+1}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{age}</td>
        </tr>
    );
};

export {User};
