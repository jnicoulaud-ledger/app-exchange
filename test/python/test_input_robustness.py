from ragger.utils import RAPDU
from ragger.backend import RaisePolicy

from .apps.exchange import ExchangeClient, Rate, SubCommand, Errors
from .signing_authority import SigningAuthority, LEDGER_SIGNER

class TestInputRobustness:

    def test_flow_name_too_long(self, backend, firmware):
        name = "PARTNER_NAME_123" # Too long
        ex = ExchangeClient(backend, Rate.FIXED, SubCommand.SWAP)
        partner = SigningAuthority(curve=ex.partner_curve, name=name)

        ex.init_transaction()
        backend.raise_policy = RaisePolicy.RAISE_NOTHING
        rapdu: RAPDU = ex.set_partner_key(partner.credentials)
        assert rapdu.status == Errors.INCORRECT_COMMAND_DATA

    def test_flow_name_too_short(self, backend, firmware):
        name = "PA" # Too short
        ex = ExchangeClient(backend, Rate.FIXED, SubCommand.SWAP)
        partner = SigningAuthority(curve=ex.partner_curve, name=name)

        ex.init_transaction()
        backend.raise_policy = RaisePolicy.RAISE_NOTHING
        rapdu: RAPDU = ex.set_partner_key(partner.credentials)
        assert rapdu.status == Errors.INCORRECT_COMMAND_DATA
