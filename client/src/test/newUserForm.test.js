import React from 'react';
import {render,cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import NewUserForm from '../components/userAuth/NewUserForm';

describe('NewUserForm Testing',()=>{
   

    afterEach(()=>{
        cleanup()
    })

    it('H2 Create an account title',()=>{
        const {getByText}=render(<NewUserForm/>)
        
        expect(getByText(/create an account/i)).toBeVisible()
        expect(getByText(/user information/i)).toBeVisible()
    })

})