import { useState } from 'react';
import LoginForm from "~/components/LoginForm";
import RegisterForm from '~/components/RegisterForm';

export default function Auth() {
    const [expandedForm, setExpandedForm] = useState(null); // null means no form is expanded

    const handleExpand = (form: 'login' | 'register') => {
        if (expandedForm === form) {
            setExpandedForm(null); // Collapse if the same form is clicked again
        } else {
            setExpandedForm(form);
        }
    };

    return (
        <nav className="flex gap-2 justify-center items-center">
            <ul className="flex gap-16 flex flex-col justify-center items-center">
                <li className={`transition-all duration-500 ease-in-out ${expandedForm === 'register' ? 'mb-48 z-10' : ''}`}>
                    {/* <RegisterForm 
                        isExpanded={expandedForm === 'register'} 
                        onExpand={() => handleExpand('register')} 
                    /> */}
                    <RegisterForm 
                        isExpanded={expandedForm === 'register'} 
                        onExpand={() => handleExpand('register')} 
                    />
                </li>
                <li className={`transition-all duration-500 ease-in-out ${expandedForm === 'register' ? 'mb-48 z-0' : ''}`}>
                    <LoginForm 
                        isExpanded={expandedForm === 'login'} 
                        onExpand={() => handleExpand('login')} 
                    />
                </li>
            </ul>
        </nav>
    );
}