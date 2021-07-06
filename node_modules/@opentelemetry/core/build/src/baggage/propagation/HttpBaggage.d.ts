import { Context, TextMapGetter, TextMapPropagator, TextMapSetter } from '@opentelemetry/api';
export declare const BAGGAGE_HEADER = "baggage";
export declare const MAX_NAME_VALUE_PAIRS = 180;
export declare const MAX_PER_NAME_VALUE_PAIRS = 4096;
export declare const MAX_TOTAL_LENGTH = 8192;
/**
 * Propagates {@link Baggage} through Context format propagation.
 *
 * Based on the Baggage specification:
 * https://w3c.github.io/baggage/
 */
export declare class HttpBaggage implements TextMapPropagator {
    inject(context: Context, carrier: unknown, setter: TextMapSetter): void;
    private _serializeKeyPairs;
    private _getKeyPairs;
    extract(context: Context, carrier: unknown, getter: TextMapGetter): Context;
    private _parsePairKeyValue;
    fields(): string[];
}
//# sourceMappingURL=HttpBaggage.d.ts.map