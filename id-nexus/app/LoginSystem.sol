// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LoginSystem {
    struct User {
        bytes32 emailHash;
        bytes32 passwordHash;
    }

    mapping(address => User) private users;

    event UserRegistered(address indexed user, bytes32 emailHash);
    event UserLoggedIn(address indexed user);
    event PasswordChanged(address indexed user);

    function register(bytes32 _emailHash, bytes32 _passwordHash) public {
        require(users[msg.sender].emailHash == 0, "User already registered");

        users[msg.sender] = User(_emailHash, _passwordHash);
        emit UserRegistered(msg.sender, _emailHash);
    }

    function login(bytes32 _emailHash, bytes32 _passwordHash) public returns (bool) {
        require(users[msg.sender].emailHash == _emailHash, "Email ID does not match");
        require(users[msg.sender].passwordHash == _passwordHash, "Password does not match");

        emit UserLoggedIn(msg.sender);
        return true;
    }

    function changePassword(bytes32 _oldPasswordHash, bytes32 _newPasswordHash) public {
        require(users[msg.sender].passwordHash == _oldPasswordHash, "Old password does not match");

        users[msg.sender].passwordHash = _newPasswordHash;
        emit PasswordChanged(msg.sender);
    }
}

