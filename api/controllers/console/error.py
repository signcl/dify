from libs.exception import BaseHTTPException


class AlreadySetupError(BaseHTTPException):
    error_code = 'already_setup'
    description = "OpenBayes has been successfully installed. Please refresh the page or return to the dashboard homepage."
    code = 403


class NotSetupError(BaseHTTPException):
    error_code = 'not_setup'
    description = "OpenBayes has not been initialized and installed yet. " \
                  "Please proceed with the initialization and installation process first."
    code = 401


class AccountNotLinkTenantError(BaseHTTPException):
    error_code = 'account_not_link_tenant'
    description = "Account not link tenant."
    code = 403


class AlreadyActivateError(BaseHTTPException):
    error_code = 'already_activate'
    description = "Auth Token is invalid or account already activated, please check again."
    code = 403
