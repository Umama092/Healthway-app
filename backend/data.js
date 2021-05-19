import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Turna',
            email: 'admin1@example.com',
            password: bcrypt.hashSync('123456', 8),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user1@example.com',
            password: bcrypt.hashSync('789012', 8),
            isAdmin: false,
        },


    ],
};
export default data;