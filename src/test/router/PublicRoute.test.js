import React from 'react';
import { mount } from 'enzyme';
import { PublicRoute } from '../../routers/PublicRoute';
import { MemoryRouter } from 'react-router';


describe('Pruebas en <PublicRoute />', () => {

    test('Debe bloquear el componente si está autenticado', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PublicRoute
                isAuthenticated={ true } 
                component={ () => <span>Ok</span>}   
                />
            </MemoryRouter>
        );

        expect( wrapper.find('span').exists()).toBe(false);

    });
    
});