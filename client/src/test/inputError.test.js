import React from 'react';
import {render,cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import InputError from '../components/userAuth/InputError';


describe('InputError Component Tests',()=>{

    afterEach(()=>{
        cleanup()
    })

    it("Message hidden with empty error prop",()=>{
        const validationError ={
            username:""
        }
        
        const {container}= render(<InputError error={validationError.username}/>);
        //expect to find a div with hidden class
        expect(container.firstChild).toHaveClass('ui pointing red basic label hidden');
        //expect to find content of ""
        expect(container.querySelector('div')).toHaveTextContent("");

    })

    it('Message display with error',()=>{
        const validationError={
            username:"username is required"
        }

        const{container}=render(<InputError error={validationError.username}/>);
        expect(container.firstChild).not.toHaveClass('hidden')
        expect(container.querySelector('div')).toHaveTextContent("username is required")

    })

})
