#ifndef _CHECK_REFUND_ADDRESS_H_
#define _CHECK_REFUND_ADDRESS_H_

#include "swap_app_context.h"
#include "send_function.h"
#include "commands.h"

int check_refund_address(subcommand_e subcommand,
                         rate_e rate,
                         swap_app_context_t *ctx,
                         const buf_t *input,
                         SendFunction send);

#endif  // _CHECK_REFUND_ADDRESS_H_
