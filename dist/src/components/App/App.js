import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import classes from "./App.module.scss";
import { Link, Outlet } from 'react-router-dom';
import earthPng from '@/assets/earth.png';
import avatarJpeg from '@/assets/ms-square.jpeg';
import LogoSvg from '@/assets/logo.svg';
export var App = function () {
    var _a = useState(0), count = _a[0], setCount = _a[1];
    var increment = function () { return setCount(function (prev) { return prev + 1; }); };
    if (__PLATFORM__ === 'desktop') {
        return _jsx("div", { children: "ISDESKTOPPLATFORM" });
    }
    if (__PLATFORM__ === 'mobile') {
        return _jsx("div", { children: "ISMOBILEPLATFORM" });
    }
    return (_jsxs(_Fragment, { children: [_jsxs("div", { children: ["PLATFORM=", __PLATFORM__] }), _jsx("img", { width: 100, src: earthPng, alt: "Earth" }), _jsx("img", { width: 100, src: avatarJpeg, alt: "Mariia Shumova" }), _jsx("div", { children: _jsx(LogoSvg, { width: 100, height: 100 }) }), _jsx(Link, { to: '/about', children: "about" }), _jsx("br", {}), _jsx(Link, { to: '/shop', children: "shop" }), _jsx("div", { className: classes.value, children: count }), _jsx("button", { onClick: increment, className: classes.button, children: "Increment" }), _jsx(Outlet, {})] }));
};
