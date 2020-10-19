import React from 'react';
import {render,cleanup,screen,waitFor,waitForElement} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

import NewUserForm from '../components/userAuth/NewUserForm';

describe('NewUserForm Testing',()=>{
   

    afterEach(()=>{
        cleanup()
    })

    it('Initial page load',()=>{
        const {getByText,getByLabelText,getByTestId}=render(<NewUserForm/>)
        
        expect(getByText(/create an account/i)).toBeVisible()
        expect(getByText(/user information/i)).toBeVisible()
        expect(getByLabelText(/username/i)).toBeVisible()
        expect(getByLabelText(/password/i)).toBeVisible()
        expect(getByLabelText(/first name/i)).toBeVisible()
        expect(getByLabelText(/last name/i)).toBeVisible()
        expect(getByLabelText(/e-mail/i)).toBeVisible()
        expect(getByLabelText(/address/i)).toBeVisible()
        expect(getByLabelText(/phone number/i)).toBeVisible()
        expect(getByTestId(/error-message/i)).toBeInTheDocument()
        expect(getByTestId(/error-message/i).classList).toContain('hidden')
        expect(getByText(/submit/i)).toBeVisible()
        expect(getByText(/cancel/i)).toBeVisible()

    })

    it('Empty field dispay error message',()=>{
        render(<NewUserForm/>)

        userEvent.click(screen.getByPlaceholderText(/username/i))
        userEvent.click(screen.getByText(/user information/i))
        expect(screen.getByText(/username can not be empty/i)).toBeVisible()
    })

    it('Existing user display error message',async()=>{
        const{findByText}=render(<NewUserForm/>)

        userEvent.type(screen.getByPlaceholderText(/username/i),"winstoncwang")
        expect(await findByText('username already exists, please try again')).toBeVisible()
        

    })

})