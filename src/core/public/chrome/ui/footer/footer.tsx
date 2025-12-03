/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import type { Logos } from '../../../../common/types';
import { InternalApplicationStart } from '../../../application/types';
import { HttpStart } from '../../../http';
import {
    ChromeBranding
} from '../../chrome_service';

export interface FooterProps {
  opensearchDashboardsVersion: string;
  application: InternalApplicationStart;
  homeHref: string;
  basePath: HttpStart['basePath'];
  loadingCount$: ReturnType<HttpStart['getLoadingCount$']>;
  branding: ChromeBranding;
  logos: Logos;
  darkmode: boolean;
}

export function Footer({
  opensearchDashboardsVersion,
  application,
  homeHref,
  basePath,
  loadingCount$,
  branding,
  logos,
  darkmode
}: FooterProps) {

    return <>
      <footer className="syn-footer">
        <div 
            className="syn-footer__inner" 
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem'
            }}
        >
            <span>Synalytic · Malifax Indonesia</span>
            <span>|</span>
            <div 
                className="syn-footer__right"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}
            >
            <span>Powered by</span> 
            <img 
                src={darkmode ? logos.Application.dark.url : logos.Application.light.url} 
                loading="lazy"
                style={{
                    height: '1rem'
                }}
            />
            </div>
        </div>
      </footer>
    </>

}
