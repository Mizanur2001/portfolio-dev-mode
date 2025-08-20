import React, { Component } from 'react';
import $ from 'jquery';
import ReactGA from 'react-ga4';
import axios from 'axios';

export class Gedit extends Component {

    constructor() {
        super();
        this.state = {
            sending: false,
        }
    }

    sendMessage = async () => {
        let firstName = $("#sender-firstname").val() || "";
        let lastName = $("#sender-lastname").val() || "";
        let email = $("#sender-email").val() || "";
        let phone = $("#sender-phone").val() || "";
        let message = $("#sender-message").val() || "";

        firstName = firstName.trim();
        lastName = lastName.trim();
        email = email.trim();
        phone = phone.trim();
        message = message.trim();

        // append developer mode note in bold at the end of the message
        message = message + "\n\n<strong style=\"color:red\">Message From Developer Mode Portfolio</strong>";

        let error = false;

        if (firstName.length === 0) {
            $("#sender-firstname").val('');
            $("#sender-firstname").attr("placeholder", "First name must not be empty!");
            error = true;
        }

        if (lastName.length === 0) {
            $("#sender-lastname").val('');
            $("#sender-lastname").attr("placeholder", "Last name must not be empty!");
            error = true;
        }

        // basic email validation
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.length === 0 || !emailRe.test(email)) {
            $("#sender-email").val('');
            $("#sender-email").attr("placeholder", "Enter a valid email!");
            error = true;
        }

        // basic phone validation (digits, allow +, spaces, dashes)
        const phoneRe = /^[+\d][\d\s()-]{6,}$/;
        if (phone.length === 0 || !phoneRe.test(phone)) {
            $("#sender-phone").val('');
            $("#sender-phone").attr("placeholder", "Enter a valid phone number!");
            error = true;
        }

        if (message.length === 0) {
            $("#sender-message").val('');
            $("#sender-message").attr("placeholder", "Message must not be empty!");
            error = true;
        }

        if (error) return;

        this.setState({ sending: true });

        const payload = {
            firstName,
            lastName,
            email,
            phone,
            message,
        };

        try {
            await axios.post('https://backend.mizanur.in/api/v1/tools/send-email', payload, {
                headers: { 'Content-Type': 'application/json' }
            });

            // success
            $("#close-gedit").trigger("click");
        } catch (err) {
            // optional: show error feedback (kept minimal)
            console.error('Send message failed', err);
            $("#close-gedit").trigger("click");
        } finally {
            this.setState({ sending: false });
        }

        ReactGA.event({
            category: "Send Message",
            action: `${firstName} ${lastName}, ${email}, ${phone}, ${message}`
        });

    }

    render() {
        return (
            <div className="w-full h-full relative flex flex-col bg-ub-cool-grey text-white select-none">
                <div className="flex items-center justify-between w-full bg-ub-gedit-light bg-opacity-60 border-b border-t border-blue-400 text-sm">
                    <span className="font-bold ml-2">Send a Message to Me</span>
                    <div className="flex">
                        <div onClick={this.sendMessage} className="border border-black bg-black bg-opacity-50 px-3 py-0.5 my-1 mx-1 rounded hover:bg-opacity-80">Send</div>
                    </div>
                </div>
                <div className="relative flex-grow flex flex-col bg-ub-gedit-dark font-normal windowMainScreen">
                    <div className="absolute left-0 top-0 h-full px-2 bg-ub-gedit-darker"></div>

                    <div className="relative">
                        <input id="sender-firstname" className=" w-full text-ubt-gedit-orange focus:bg-ub-gedit-light outline-none font-medium text-sm pl-6 py-0.5 bg-transparent" placeholder="First name" spellCheck="false" autoComplete="off" type="text" />
                        <span className="absolute left-1 top-1/2 transform -translate-y-1/2 font-bold light text-sm text-ubt-gedit-blue">1</span>
                    </div>

                    <div className="relative">
                        <input id="sender-lastname" className=" w-full my-1 text-ubt-gedit-blue focus:bg-ub-gedit-light gedit-subject outline-none text-sm font-normal pl-6 py-0.5 bg-transparent" placeholder="Last name" spellCheck="false" autoComplete="off" type="text" />
                        <span className="absolute left-1 top-1/2 transform -translate-y-1/2 font-bold  text-sm text-ubt-gedit-blue">2</span>
                    </div>

                    <div className="relative">
                        <input id="sender-email" className=" w-full my-1 text-ubt-gedit-blue focus:bg-ub-gedit-light outline-none text-sm font-normal pl-6 py-0.5 bg-transparent" placeholder="Email" spellCheck="false" autoComplete="off" type="email" />
                        <span className="absolute left-1 top-1/2 transform -translate-y-1/2 font-bold  text-sm text-ubt-gedit-blue">3</span>
                    </div>

                    <div className="relative">
                        <input id="sender-phone" className=" w-full my-1 text-ubt-gedit-blue focus:bg-ub-gedit-light outline-none text-sm font-normal pl-6 py-0.5 bg-transparent" placeholder="Phone number" spellCheck="false" autoComplete="off" type="tel" />
                        <span className="absolute left-1 top-1/2 transform -translate-y-1/2 font-bold  text-sm text-ubt-gedit-blue">4</span>
                    </div>

                    <div className="relative flex-grow">
                        <textarea id="sender-message" className=" w-full gedit-message font-light text-sm resize-none h-full windowMainScreen outline-none tracking-wider pl-6 py-1 bg-transparent" placeholder="Message" spellCheck="false" autoComplete="none" type="text" />
                        <span className="absolute left-1 top-1 font-bold  text-sm text-ubt-gedit-blue">5</span>
                    </div>
                </div>
                {
                    (this.state.sending
                        ?
                        <div className="flex justify-center items-center animate-pulse h-full w-full bg-gray-400 bg-opacity-30 absolute top-0 left-0">
                            <img className={" w-8 absolute animate-spin"} src="./themes/Yaru/status/process-working-symbolic.svg" alt="Ubuntu Process Symbol" />
                        </div>
                        : null
                    )
                }
            </div>
        )
    }
}

export default Gedit;

export const displayGedit = () => {
    return <Gedit> </Gedit>;
}
