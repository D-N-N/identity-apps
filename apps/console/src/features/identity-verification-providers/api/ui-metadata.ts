/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { AcceptHeaderValues ,HttpMethods } from "@wso2is/core/models";
import { store } from "../../core";
import useRequest, {
    RequestConfigInterface,
    RequestErrorInterface,
    RequestResultInterface
} from "../../core/hooks/use-request";
import { IdentityVerificationProviderInterface } from "../models";
import { IDVPTypeMetadataInterface, UIMetaDataForIDVP } from "../models/ui-metadata";

/**
 * Hook to get the identity verification provider (IDVP) list with limit and offset.
 *
 *
 * @returns UI Metadata object for the IDVP
 * @param idvpType - Type of the IDVP
 */
export const useUIMetadata = <Data = UIMetaDataForIDVP, Error = RequestErrorInterface>(
    idvpType: string
): RequestResultInterface<Data, Error> => {
    const requestConfig: RequestConfigInterface = {
        headers: {
            "Accept": AcceptHeaderValues.APP_JSON
        },
        method: HttpMethods.GET,
        url: `${ store.getState().config.endpoints.IDVPExtensionEndpoint }/${ idvpType }/metadata`
    };
    // IF the idvpType is not set, passing null to the useRequest hook will abort the request.
    const { data, error, isValidating, mutate } = useRequest<Data, Error>( idvpType? requestConfig : null);

    return {
        data,
        error: error,
        isLoading: !error && !data,
        isValidating,
        mutate
    };
};

/**
 * Hook to get the identity verification provider (IDVP) list with limit and offset.
 *
 *
 * @returns UI Metadata object for the IDVP
 */
export const useIDVPTemplateTypeMetadataList = <Data = IDVPTypeMetadataInterface[], Error = RequestErrorInterface>(

): RequestResultInterface<Data, Error> => {
    const requestConfig: RequestConfigInterface = {
        headers: {
            "Accept": AcceptHeaderValues.APP_JSON
        },
        method: HttpMethods.GET,
        url: store.getState().config.endpoints.IDVPExtensionEndpoint
    };

    const { data, error, isValidating, mutate } = useRequest<Data, Error>( requestConfig );

    return {
        data,
        error: error,
        isLoading: !error && !data,
        isValidating,
        mutate
    };
};

export const useIDVPTemplateTypeMetadata = <Data = IDVPTypeMetadataInterface, Error = RequestErrorInterface>(
    idvpType: string
): RequestResultInterface<Data, Error> => {
    const requestConfig: RequestConfigInterface = {
        headers: {
            "Accept": AcceptHeaderValues.APP_JSON
        },
        method: HttpMethods.GET,
        url: store.getState().config.endpoints.IDVPExtensionEndpoint + "/"+ idvpType
    };

    const { data, error, isValidating, mutate } = useRequest<Data, Error>( idvpType ? requestConfig : null );

    return {
        data,
        error: error,
        isLoading: !error && !data,
        isValidating,
        mutate
    };
};

/**
 * Hook to get the identity verification provider (IDVP) list with limit and offset.
 *
 *
 * @returns UI Metadata object for the IDVP
 */
export const useIDVPTemplate = <Data = IdentityVerificationProviderInterface, Error = RequestErrorInterface>(
    idvpType: string
): RequestResultInterface<Data, Error> => {
    const requestConfig: RequestConfigInterface = {
        headers: {
            "Accept": AcceptHeaderValues.APP_JSON
        },
        method: HttpMethods.GET,
        url: `${ store.getState().config.endpoints.IDVPExtensionEndpoint }/${ idvpType }/template`
    };

    // IF the idvpType is not set, passing null to the useRequest hook will abort the request.
    const { data, error, isValidating, mutate } = useRequest<Data, Error>( idvpType ? requestConfig : null );

    return {
        data,
        error: error,
        isLoading: !error && !data,
        isValidating,
        mutate
    };
};