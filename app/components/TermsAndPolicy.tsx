'use client';

import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Diddy Memes',
  description: 'Terms and Conditions for Diddy Memes',
};

const TermsAndPolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 bg-white text-black">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Diddy Memes <br/>Terms and Conditions</h1>
      </div>

      {/* Terms Content */}
      <div className="space-y-6 text-gray-800">
        <p>
          Thank you for visiting <Link href="/dashboard" className='text-blue-700 underline'>www.pdiddymemes.com</Link> (the &quot;Website&quot;). Please carefully review the
          terms below as they contain important information about the Website and the digital collectible tokens known as as &quot;Diddy Memes&quot; or &quot;Diddy&quot; featured on the Website(the &quot;Diddy Memes&quot;).
        </p>
        <h3 className='text-left font-bold text-lg'>Introduction</h3>
        <p>
          The Website is owned and operated by Combs Brothers Productions LLC (hereinafter collectively referred to with its affiliate(s), successor(s), assign(s) and/or designee(s) as &quot;Meme Group&quot; &quot;we&quot; &quot;our&quot; or &quot;us&quot;). Combs Brothers Productions LLC is owned exclusively by relatives of Sean Combs, a/k/a &quot;Diddy&quot;, including certain of his children. Our Website, together with any content, functionality, and services offered on or through our Website, and all of the existing and any updated or new content, features, functionalities, materials, social media pages, shall be collectively referred to as the &quot;Services.&quot;
        </p>
        <p>
          THIS AGREEMENT CONTAINS DISCLAIMERS OF WARRANTIES, LIMITATIONS OF
          LIABILITY, RELEASES, A CLASS-ACTION WAIVER, AND A REQUIREMENT TO
          ARBITRATE ANY AND ALL CLAIMS THAT MAY ARISE HEREUNDER AGAINST
          COMBS BROTHERS PRODUCTIONS LLC, AND ITS COMMERCIAL PARTNERS AND
          LICENSORS, AND EACH OF THEIR RESPECTIVE PAST, PRESENT AND FUTURE
          EMPLOYEES, OFFICERS, DIRECTORS, CONTRACTORS, CONSULTANTS, EQUITY
          HOLDERS, SUPPLIERS, VENDORS, SERVICE PROVIDERS, PARENT COMPANIES,
          SUBSIDIARIES, AFFILIATES, AGENTS, REPRESENTATIVES, PREDECESSORS,
          SUCCESSORS AND ASSIGNS (INDIVIDUALLY AND COLLECTIVELY, &quot;COVERED
          PARTIES&quot;), WHO ARE EXPRESS THIRD-PARTY BENEFICIARIES OF THE
          MANDATORY ARBITRATION PROVISION. 
        </p>

        <p>
          You agree to the Terms and Conditions in their entirety when you: (a) access or use the Website; (b) access and/or view any of the: (i) links to third-party resources and other information (&quot;Third-Party Links&quot;) through the Website; and/or (ii) videos, audio, stories, testimonials, text, photographs, graphics, artwork, information and/or other content that may be featured on the Website (the &quot;Website Content,&quot; and together with the Third-Party Links, the &quot;Content&quot;); and/ or (d) purchase any of the Diddy Memes featured on the Website (the &quot;Diddy Memes&quot;); and/or (e) indicate your acceptance of these Terms and Conditions.
        </p>

        <p>
          These Terms and Conditions supersede all prior or contemporaneous agreements,
          representations, warranties and/or understandings with respect to your use of the Services. If you
          do not understand or agree to the Terms and Conditions in its entirety, you should not use the
          Website or any of the Services in any manner or form whatsoever.
        </p>
        
        <div className="section">
          <h2 className='font-bold underline'>1. Eligibility.</h2>
          <ol type="a" className="subsection">
            <li className='mx-5 mt-5'>
              a.You hereby represent and warrant that you have the full right, power, and
              authority to agree to, abide by and comply with these Terms and Conditions, and
              to access the Services. You further represent and warrant that you are of the legal
              age of majority in your applicable jurisdiction. You acknowledge and agree that
              you are solely responsible for ensuring compliance with any and all applicable
              laws and/or regulations in your local jurisdiction, and that we shall not be liable to
              any extent for your compliance or failure to comply with any such laws and/or
              regulations.
            </li>
            <li className='mx-5 mt-5'>
              b.The Services are not available to (i) individuals or entities (including those owned
              or controlled by individuals) that are the subject of economic or trade sanctions
              administered or enforced by any governmental authority or otherwise designated
              on any list of prohibited or restricted parties (including but not limited to the
              United Nations Security Council, the European Union, His Majesty&apos;s Treasury of
              the United Kingdom of Great Britain and Northern Ireland (the &quot;UK Treasury&quot;),
              and the U.S. Department of Treasury), (ii) individuals or entities based on the
              &quot;Denied Persons List&quot; by the Bureau of Industry and Security of the United
              States Department of Commerce; or (iii) residents and citizens of countries
              located in, or incorporated under the laws of any country, territory or other
              jurisdiction subject to a U.S. federal or state government embargo, or that have
              been designated by the U.S. federal government as a terrorist-supporting country,
              or is otherwise the subject of comprehensive country-wide, territory-wide, or
              regional economic sanctions by the United Nations, the European Union, the UK
              Treasury, or the United States, including without limitation Cuba, the Crimea,
              Donetsk, and Luhansk regions of Ukraine, Iran, North Korea, Russia, Syria, or
              Yemen (collectively, &quot;Prohibited Users&quot;). By using the Services, you represent
              and warrant that you are not a Prohibited User.
            </li>
            <li className='mx-5 mt-5'>
              c.You further represent and warrant that all funds and/or assets (e.g., digital assets,
              such as that digital asset commonly known as [&quot;Solana,&quot; and/or &quot;$SOL&quot;]) used
              by you in connection herewith [(e.g., for payment of the Purchase Price (as
              defined below), etc.)] have been lawfully obtained by you in compliance with all
              applicable laws and/or regulations. You acknowledge that third party service
              providers may require you to provide additional information and/or
              documentation and/or take certain action(s) in order to ensure compliance with
              applicable laws and/or regulations (e.g., those related to anti-money laundering,
              etc.), and agree that you will provide any such additional information and/or
              documentation and/or take such action(s) upon request. You further acknowledge
              and agree that we and/or our designee(s) may remove your access to the Service
              at any time, for any reason, with or without notice to you.
            </li>
          </ol>
        </div>
        
        <div className="section">
          <h2 className='font-bold underline'>2. $DIDDY Ownership and Distribution.</h2>
          <ol type="a" className="subsection">
            <li className='mx-5 mt-5'>
              a.Diddy Memes are created, developed, and minted on the Solana blockchain by
              Meme Group. Each Diddy Meme, prior to its initial transfer and sale, is controlled
              by Meme Group. Meme Group presently intends for a total supply of 1 billion
              Diddy Memes, with the following allocation:
              <ol type="i" className="sub-subsection">
                <li className='mx-5 mt-5'>i. 10% to be made available for sale through the Purchase Links;</li>
                <li className='mx-5 mt-5'>ii. 10% for future sales;</li>
                <li className='mx-5 mt-5'>iii. 10% to the Development Team (as defined below); and</li>
                <li className='mx-5 mt-5'>iv. 70% to Combs Brothers Productions LLC.</li>
              </ol>
            </li>
            <li className='mt-5 mx-5'>
              b.<span className='italic'>Allocation to Meme Group.</span> The Diddy Memes allocated to Combs Brothers
              Productions LLC and its commercial partners (the &quot;Development Team&quot;), are
              subject to programmatic restrictions whereby 100% of their respective allocations
              are locked until 3 months following the first sale of a Diddy Meme through the
              Purchase Links. Thereafter, 2.78% of their respective allocations are released
              from such lock-up restrictions on a monthly basis over the following 36 months.
              You acknowledge that the Development Team and Combs Brothers Productions
              LLC are under no obligation whatsoever to use or not use the Diddy Memes
              released from such lock-up restrictions and will be permitted to sell or transfer
              their unlocked Diddy Memes. Any effort by the Development Team and Combs
              Brothers Productions LLC to sell all or a portion of their Diddy Memes would
              significantly increase the circulating supply of Diddy Memes and could adversely
              impact secondary markets and/or prices Diddy Memes, if any exist.
            </li>
            <li className='mt-5 mx-5'>
              c.<span className='italic'>Allocation for Future Sales.</span> You further acknowledge that a material portion of
              the total supply of Diddy Memes is reserved for future sales by the Meme Group,
              which could happen at any time and without notice to you.
            </li>
            <li className='mt-5 mx-5'>
              d.<span className='italic'>Proceeds from Present Sale.</span> Proceeds and transaction fees collected from the sale
              of Diddy Meme though Purchase Links and any subsequent transactions
              (&quot;Proceeds&quot;) will be retained by the Meme Group and allocated amongst us in
              our sole discretion. The Meme Group makes no representation or warranties
              regarding whether we will use such Proceeds for a particular purpose. You
              expressly acknowledge and agree that the Meme Group may use such Proceeds
              for any purpose and that you have no right to participate in any manner in any
              activities, profits, or income, derived by or resulting from the Proceeds.
            </li>
          </ol>
        </div>
        
        <div className="section">
          <h2 className='font-bold underline'>3. Sales, Prices and Taxes.</h2>
          <ol type="a" className="subsection">
            <li className='mt-5 mx-5'>
              a.Diddy Memes are not available for purchase directly on the Website but may be
              purchased through services and platforms provided by third-parties or hosted on
              decentralized applications (&quot;Purchase Links&quot;), which are included among the
              Third-Party Links. When you click on such a link, we will not warn you that you
              are about to or have left the Services. Meme Group does not control and is not
              responsible for any content or services accessible through Third-Party Links,
              which are provided pursuant to their own separate terms of service (&quot;Third-Party
              Terms&quot;) that differ from ours.
              <br /><br />
              You agree that your relationships with such third-party service providers will be
              governed by the applicable Third-Party Terms. Your use of all Third-Party Links,
              including Purchase Links, is at your own risk.
            </li>
            <li className='mt-5 mx-5'>
              b.Generally, the advertised price of Diddy Memes will determined by market
              conditions, and as such, is likely to fluctuate up and/or down. Any order(s) placed
              through the Purchase Links may require immediate payment in full of the
              applicable purchase price (the &quot;Purchase Price&quot;) at the time of purchase, and
              shall be non-refundable. You hereby acknowledge and agree that, due to the
              nature of blockchain technology, once any transaction representing such order(s)
              has been broadcast to the Designated Blockchain (as defined below), such order
              cannot be cancelled or reversed for any reason.
            </li>
            <li className='mt-5 mx-5'>
              c.You further acknowledge and agree that, due to the nature of blockchain
              technology, the consensus rules of the Designated Blockchain may require the
              payment of an additional per-transaction fee (a &quot;Gas Fee&quot;).
            </li>
            <li className='mt-5 mx-5'>
              d.You will be solely responsible to pay any and all Gas Fee(s) associated with the
              blockchain-based transactions that you conduct in connection with the sale and/or
              acquisition of any Diddy Memes. You further acknowledge and agree that any
              subsequent sale(s) and/or transfer(s) of any Diddy Memes may be subject to
              royalties and/or other fees imposed by the third-party marketplace(s) that facilitate
              such sale(s) and/or transfer(s), and, in the event that any such royalties and/or fees
              are paid or accrue, Meme Group may receive a portion thereof. Any such sale(s)
              and/or transfer(s) shall be subject to the terms and conditions applicable to and set
              forth by any such applicable marketplace(s).
            </li>
            <li className='mt-5 mx-5'>
              e.You are solely responsible for paying any taxes applicable to your purchase and
              use of Diddy Memes in all relevant jurisdictions.
            </li>
          </ol>
        </div>
        
        <div className="section">
          <h2 className='font-bold underline'>4. Delivery.</h2>
          <p className='mx-5 mt-5'>
            In order to purchase and receive any Diddy Memes through the
            Purchase Links, you may be required to connect your digital-asset wallet to the Third
            Party&apos;s application or platform. You acknowledge and agree that we shall not bear any
            responsibility for any Diddy Memes misdelivered as a result of incorrect information
            provided by you or by any error by the Third Party, and that you shall bear sole
            responsibility for ensuring that your digital-asset wallet is accurately and properly used.
          </p>
        </div>

        <div className='section'>
          <h2 className="font-bold underline mb-4">5. Diddy Memes</h2>
          <ol className="list-none pl-6 space-y-2 mb-6">
            <li>
              <p className="mb-2">a. The Diddy Memes are Solana blockchain-based fungible cryptocurrency tokens. 
              The Diddy Memes embedded with a digital artwork that is the intellectual 
              property of Meme Group (the &quot;Associated Artwork&quot;). The Associated Artwork is 
              separate from the Diddy Meme associated therewith, and your rights, title and 
              interests therein shall be licensed to you solely as set forth in Section [6] below.</p>
            </li>
            <li>
              <p className="mb-2">b. The Services are not provided, and the Diddy Memes are not sold or distributed, 
              by Sean Combs or his affiliates. We use the &quot;DIDDY&quot; name and the name, image, 
              and likeness of Sean Combs pursuant to a limited license agreement.</p>
            </li>
            <li>
              <p className="mb-2">c. The Diddy Memes have no present or planned utility but are intended to function 
              as an expression of enthusiasm, and engagement with, the ideals, beliefs 
              embodied by the symbol &quot;DIDDY&quot; and the Associated Artwork. Accordingly, 
              Diddy Memes should only be purchased for the social, cultural, and entertainment 
              benefit you derive from expressing such enthusiasm or engagement. Diddy 
              Memes are not intended to be, or to be the subject of, an investment opportunity, 
              investment contract, or security of any type. No federal or state agency or any 
              other governmental authority has passed on or made any recommendation or 
              endorsement of the Diddy Memes.</p>
            </li>
          </ol>
        </div>                
        

        <h2 className="font-bold underline mb-4">6. Grant of Rights</h2>
        <p className="mx-5 mb-4">Subject to and fully conditioned upon your continued compliance 
        with these Terms and Conditions, and solely for so long as you own a Diddy Meme 
        embedded with the Associated Artwork, we grant you a revocable, limited, personal, non-
        exclusive, non-sublicensable, worldwide license to display, perform and distribute such 
        Associated Artwork solely (i) for non-commercial, personal use, including within 
        audiovisual media (e.g., displaying such Associated Artwork on a platform or service, 
        including online games or online environment(s) that may be commonly known as 
        &quot;metaverse(s)&quot;, for personal, non-commercial purposes); and/or (ii) in connection with 
        your attempt(s) to sell or otherwise transfer your Diddy Meme(s) to any other person or 
        entity, in each case subject to the terms and conditions set forth herein (the &quot;License&quot;). 
        You acknowledge and agree that we may revoke, amend, remove or otherwise modify the 
        License granted to you, for any reason, with or without notice to you.</p>
        
        <p className="mx-5 mb-4">Notwithstanding anything to the contrary and for the avoidance of doubt, the foregoing 
        shall not permit the use of, and you will not, and you will not authorize, permit or assist any third 
        party to, directly or indirectly use, any Associated Artwork in connection with any of the 
        following:</p>
        
        <ol className="mx-5 list-none pl-6 space-y-2 mb-6">
          <li>
            <p className="mb-2">a. any illegal product or service or any other use in violation of applicable law;</p>
          </li>
          <li>
            <p className="mb-2">b. any physical or digital firearm or weapon;</p>
          </li>
          <li>
            <p className="mb-2">c. any physical or digital tobacco product, pharmaceutical product or regulated drug, 
            or product, substance or material containing any tobacco product or regulated 
            drug (excluding alcohol);</p>
          </li>
          <li>
            <p className="mb-2">d. any counterfeit physical or digital product;</p>
          </li>
          <li>
            <p className="mb-2">e. any product, service, content, material or speech that is defamatory, obscene, 
            pornographic, indecent, abusive, offensive, harassing, violent, hateful, racist, 
            discriminatory, inflammatory or otherwise objectionable, inappropriate or harmful 
            to our intellectual property and/or goodwill, as determined by us in our sole 
            discretion; and/or</p>
          </li>
          <li>
            <p className="mb-2">f. any other digital collectible project (including without limitation, fungible or non-
            fungible blockchain-based tokens) that would use or incorporate any Associated 
            Artwork.</p>
          </li>
        </ol>

        <h2 className="font-bold underline mb-4">7. Ownership and Limitations</h2>
        <p className="mx-5 mb-4">We retain all rights, title and interest in the Website 
        Content and Associated Artwork, and all copyrights and/or other intellectual property 
        rights therein. Except as specifically set forth in Section 6 above, you do not have and 
        will not have any right, title or interest in or to any Associated Artwork and you shall not 
        be deemed to be granted any rights, whether express or implied, with respect to any 
        Associated Artwork or any derivative works thereof.</p>
        
        <p className="mx-5 mb-4">For avoidance of doubt, you have no right to, and you will not, and you will not 
        authorize, permit or assist any third party to, use any name, trademark, logo, branding or other 
        intellectual property of Meme Group or any affiliate, commercial partner or licensor of Meme 
        Group, or of Sean Combs, for any purpose not specifically set forth herein, or otherwise do or 
        say anything to indicate or imply that we or any of our affiliates sponsors, promotes or endorses 
        any product, service or media or provides any representations or warranties with respect to any 
        product, service or media.</p>
        
        <p className="mx-5 mb-4">For the avoidance of doubt, if at any time you transfer a Diddy Meme to a third party, any 
        rights granted to you hereunder with respect to such Diddy Meme and the Associated Artwork 
        associated therewith shall immediately terminate (without the requirement of notice) with no 
        outstanding or ongoing obligation or liability to you.</p>

        <h2 className="font-bold underline mb-4">8. Blockchain Forks</h2>
        <ol className="list-none pl-6 space-y-2 mb-6">
          <li>
            <p className="mb-2">a. You acknowledge and agree that the Diddy Memes sold through the Purchase 
            Links exist on the version of the Solana digital blockchain ledger and network 
            that is recognized by the nodes or validators of such network as canonical as of 
            the time of such sale (the &quot;Designated Blockchain&quot;); provided that, for the 
            avoidance of doubt, the Designated Blockchain does not refer to any Persistent 
            Forks (as defined below), any digital blockchain ledgers which are not operating 
            in a production environment or blockchains which are referred to as a &quot;testnet&quot;. 
            As used herein, a &quot;Persistent Fork&quot; means a digital blockchain ledger and 
            network generally recognized in the blockchain industry as the mainnet and 
            consensus blockchain of a persistent &quot;contentious hardfork&quot; from the Designated 
            Blockchain, which such hardfork has or would reasonably be expected to have 
            material value independent from the Designated Blockchain.</p>
          </li>
          <li>
            <p className="mb-2">b. In the event of a Persistent Fork that creates a copy(ies) of any Diddy Memes at 
            the same addresses at which they were then held on the Designated Blockchain, 
            the scope of the term &quot;you&quot; under these Terms, and all licenses granted to and 
            other rights of you under these Terms, shall be deemed expanded to include each 
            person who lawfully holds exclusive title to and ownership of the copy(ies) of the 
            applicable Diddy Memes that are included on the Persistent Fork. You hereby 
            acknowledge and agree that, as a result of the preceding sentence, in the event of 
            a Persistent Fork, the aggregate number of the Diddy Memes may be increased 
            and/or unlimited minting of such Diddy Memes may be permitted.</p>
          </li>
        </ol>

        <h2 className="font-bold underline mb-4">9. Assumption of Risk</h2>
        <p className="mx-5 mb-4">You acknowledge that the Diddy Memes and/or Associated 
        Artwork is/are made available solely for social, cultural, and entertainment purposes and 
        not as an investment instrument of any kind. Accordingly, you acknowledge and agree 
        that you assume the following risks:</p>
        
        <ol className="mx-5 list-none pl-6 space-y-2 mb-6">
          <li>
            <p className="mb-2">a. to the extent there is a secondary market and/or price for Diddy Memes, such 
            prices may be extremely volatile and you may experience substantial losses in 
            connection with a sale or other disposition of Diddy Memes. We make absolutely 
            no promise or guarantee that the Diddy Memes will increase in value or maintain 
            the same value as the amount you paid to purchase same;</p>
          </li>
          <li>
            <p className="mb-2">b. risks associated with digital assets (including Diddy Memes) include, but are not 
            limited to, (i) hardware, software and/or Internet failures, (ii) the loss of access to 
            Diddy Memes due to, e.g., loss of so-called &quot;private key(s)&quot; or third-party 
            custodial error, (iii) malicious software introduction (e.g., hacking or cyber-
            attacks), and/or (iv) that third parties may obtain unauthorized access to 
            information stored within your so-called &quot;digital wallet&quot; or elsewhere (e.g., 
            fraud);</p>
          </li>
          <li>
            <p className="mb-2">c. upgrades, so-called &quot;hard forks,&quot; failures, cessations or other changes to the 
            blockchain(s) underlying the Diddy Memes that may affect your access to and/or 
            use of any Diddy Memes or Associate Artwork;</p>
          </li>
          <li>
            <p className="mb-2">d. risks associated with third-party software providers, marketplaces and/or other 
            actors that may be associated with any Diddy Meme(s), including with respect to 
            the continued availability of such third party(ies) and/or the protection and/or 
            storage of any digital assets or other data that you may provide to such third 
            party(ies);</p>
          </li>
          <li>
            <p className="mb-2">e. the risk of changes to the regulatory and/or policy regime(s) governing blockchain 
            technologies (e.g., digital assets) which may adversely affect your access to and/ 
            or use of any Diddy Meme or Associated Artwork;</p>
          </li>
          <li>
            <p className="mb-2">f. risks associated with transaction(s) between you and any third party(ies) (e.g., 
            your transfer of Diddy Meme(s) to any such third party).</p>
          </li>
        </ol>
        
        <p className="mx-5 mb-4">In addition to assuming all of the above risks, you acknowledge that you have obtained 
        sufficient information to make informed decision(s) with respect to the Diddy Memes (including, 
        without limitation, the acquisition thereof and/or your entering into these Terms and Conditions) 
        and that you understand and agree that you are solely responsible for determining the nature, 
        suitability and appropriateness of these risks for yourself.</p>

        <h2 className="font-bold underline mb-4">10. Indemnification</h2>
        <p className="mx-5 mb-4">To the fullest extent permitted by applicable law, you agree to 
        indemnify, defend and hold harmless the Covered Parties from and against all actual or 
        alleged claims, damages, awards, judgments, losses, liabilities of every kind and nature 
        whatsoever (including, without limitation, attorneys&quot; fees and other legal expenses), 
        whether known or unknown, that are caused by, arise out of or are related to (a) your 
        ownership, use or misuse of any Diddy Meme and/or Associated Artwork; (b) your 
        breach or violation of these Terms; and/or (c) your breach or violation of any right(s) of 
        any third party (collectively, &quot;Claims&quot;). You agree to promptly notify us of any Claim(s) 
        and shall cooperate fully with the Covered Parties in defending such Claims. You further 
        agree that the Covered Parties shall have control of the defense or settlement of any third 
        party Claims. THIS INDEMNITY IS IN ADDITION TO, AND NOT IN LIEU OF, ANY 
        OTHER INDEMNITIES SET FORTH IN ANY WRITTEN AGREEMENT(S) 
        BETWEEN YOU AND US.</p>

        <h2 className="font-bold underline mb-4">11. Limitation of Liability; Release</h2>
        <ol className="list-none pl-6 space-y-2 mb-6">
          <li>
            <p className="mb-2">a. EXCEPT AS EXPRESSLY PROVIDED TO THE CONTRARY IN A WRITING 
            BY US, THE DIDDY MEMES AND/OR ASSOCIATED ARTWORK ARE 
            PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; &quot;BASIS WITHOUT 
            WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR 
            IMPLIED. Meme Group (AND ITS AFFILIATE(S), LICENSOR(S) AND/OR 
            OTHER BUSINESS ASSOCIATE(S)) MAKES NO WARRANTY THAT THE 
            FOREGOING: (A) WILL MEET YOUR REQUIREMENTS; (B) WILL BE 
            AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE OR ERROR-
            FREE BASIS; OR (C) WILL BE ACCURATE, RELIABLE, COMPLETE, 
            LEGAL OR SAFE. WE DISCLAIM ALL OTHER WARRANTIES OR 
            CONDITIONS, EXPRESS OR IMPLIED, INCLUDING, WITHOUT 
            LIMITATION, IMPLIED WARRANTIES OR CONDITIONS OF 
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE 
            AND NON-INFRINGEMENT AS TO THE DIDDY MEMES AND/OR 
            ASSOCIATED ARTWORK ASSOCIATE THEREWITH. YOU ACCEPT THE 
            INHERENT SECURITY RISKS OF PROVIDING INFORMATION AND 
            DEALING ONLINE OVER THE INTERNET AND WILL NOT HOLD US 
            RESPONSIBLE FOR ANY BREACH OF SECURITY UNLESS IT IS DUE TO 
            OUR GROSS NEGLIGENCE.</p>
          </li>
          <li>
            <p className="mb-2">b. TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL 
            MEME GROUP OR ITS AFFILIATES, OR ITS OR THEIR LICENSORS, 
            SERVICE PROVIDERS, EMPLOYEES, CONTRACTORS, AGENTS, 
            OFFICERS OR DIRECTORS, BE LIABLE FOR ANY INDIRECT, SPECIAL, 
            INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING 
            BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, 
            EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS 
            OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF 
            GOODWILL, LOSS OF DATA, LOSS OF DIGITAL ASSETS (E.G., NFTS), 
            LOSS OF SO-CALLED &quot;PRIVATE KEY(S)&quot;, LOSS OF SO-CALLED &quot;SEED 
            PHRASE(S)&quot;, LOSS OF ACCESS TO ANY SO-CALLED &quot;DIGITAL 
            WALLET(S)&quot;, OR ANY OTHER DAMAGES OF ANY KIND, UNDER ANY 
            LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR 
            USE, OR INABILITY TO ACCESS OR USE, ANY DIDDY MEMES AND/OR 
            ASSOCIATED ARTWORK, INCLUDING BUT NOT LIMITED TO ANY 
            CONTENT ON THE SERVICE OR ANY OTHER WEBSITES AND/OR 
            MOBILE APPLICATIONS AND/OR ANY ITEMS OBTAINED THROUGH 
            THE SERVICE OR SUCH OTHER WEBSITES AND MOBILE 
            APPLICATIONS, WHETHER CAUSED BY TORT (INCLUDING 
            NEGLIGENCE), BREACH OF CONTRACT OR OTHERWISE, EVEN IF 
            FORESEEABLE.</p>
          </li>
          <li>
            <p className="mb-2">c. IN NO EVENT WILL OUR AGGREGATE LIABILITY FOR ALL CLAIMS 
            RELATING TO THE SERVICES, DIDDY MEMES AND/OR ASSOCIATED 
            ARTWORK AND/OR THE ACCESS TO AND/OR USE THEREOF, EXCEED 
            $100.</p>
          </li>
          <li>
            <p className="mb-2">d. ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF 
            OR RELATING TO THESE TERMS, THE SERVICE, THE DIDDY MEMES 
            AND/OR ASSOCIATED ARTWORK MUST BE COMMENCED WITHIN ONE 
            (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES, OTHERWISE, SUCH 
            CAUSE OF ACTION OR CLAIM SHALL BE DEEMED PERMANENTLY 
            WAIVED AND BARRED.</p>
          </li>
          <li>
            <p className="mb-2">e. YOU, ON BEHALF OF YOURSELF AND YOUR SUCCESSORS, ASSIGNS, 
            AND OTHER LEGAL REPRESENTATIVES (INDIVIDUALLY AND 
            COLLECTIVELY, THE &quot;RELEASING PARTIES&quot;), HEREBY ABSOLUTELY, 
            UNCONDITIONALLY AND IRREVOCABLY RELEASE AND FOREVER 
            DISCHARGE EACH OF THE COVERED PARTIES OF AND FROM ALL 
            DEMANDS, ACTIONS, CAUSES OF ACTION, SUITS, COVENANTS, 
            CONTRACTS, CONTROVERSIES, DAMAGES AND ANY AND ALL OTHER 
            CLAIMS, COUNTERCLAIMS, DEFENSES, RIGHTS OF SET-OFF, 
            DEMANDS AND LIABILITIES WHATSOEVER OF EVERY NAME AND 
            NATURE, KNOWN OR UNKNOWN, SUSPECTED OR UNSUSPECTED, 
            BOTH AT LAW AND IN EQUITY, WHICH ANY RELEASING PARTY MAY 
            NOW OR HEREAFTER OWN, HOLD, HAVE OR CLAIM TO HAVE 
            AGAINST THE COVERED PARTIES OR ANY OF THEM FOR, UPON, OR 
            BY REASON OF ANY CIRCUMSTANCE, ACTION, CAUSE OR THING 
            WHATSOEVER WHICH ARISES FOR OR ON ACCOUNT OF, OR IN 
            RELATION TO, OR IN ANY WAY IN CONNECTION WITH ANY OF THE 
            ADDITIONAL RIGHTS, INCLUDING ANY EXERCISE OR REMOVAL 
            THEREOF.</p>
          </li>
          <li>
            <p className="mb-2">f. THIS SECTION DOES NOT AFFECT ANY LIABILITY THAT CANNOT BE 
            EXCLUDED OR LIMITED UNDER APPLICABLE LAW. BECAUSE SOME 
            STATES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR THE 
            LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL 
            DAMAGES, IN SUCH STATES OR JURISDICTIONS THE ABOVE 
            LIMITATIONS AND EXCLUSIONS MAY NOT APPLY TO YOU. IN SUCH 
            STATES OR JURISDICTIONS, OUR LIABILITY IS LIMITED TO THE 
            EXTENT PERMITTED BY LAW, THEREBY MINIMIZING OUR LIABILITY 
            TO YOU TO THE LOWEST AMOUNT PERMITTED BY APPLICABLE LAW.</p>
          </li>
        </ol>

        <h2 className="font-bold underline mb-4">12. Governing Law</h2>
        <p className="mx-5 mb-4">These Terms will be construed in accordance with the laws of the 
        state of New York as applied to contracts made and performed entirely therein, and 
        without regard to conflicts of laws principles to the contrary. Except as otherwise set 
        forth in Section 12 below, any disputes relating to these Terms will be brought solely in 
        the state or federal courts located in the New York County, New York and you hereby 
        consent to the exclusive jurisdiction of such state and federal courts and waive any 
        defense of forum non conveniens. EACH PARTY HEREBY EXPRESSLY WAIVES 
        ANY RIGHT TO A TRIAL BY JURY IN ANY ACTION OR PROCEEDING 
        BROUGHT BY OR AGAINST EITHER PARTY IN CONNECTION WITH THESE 
        TERMS.</p>

        <h2 className="font-bold underline mb-4">13. Dispute Resolution</h2>
        <ol className=" list-none pl-6 space-y-2 mb-6">
          <li>
            <p className="mb-2">a. Any controversy or claim arising out of or relating to these Terms, or the breach 
            thereof, including all questions of arbitrability, shall be settled by arbitration 
            administered by the American Arbitration Association (&quot;AAA&quot;) in accordance 
            with its Commercial Arbitration Rules by a sole arbitrator. You and Meme Group 
            shall endeavor to agree upon the arbitrator, and if they fail to do so within twenty-
            one (21) days of the commencement of the arbitration, the appointment shall be 
            made by the AAA in accordance with the Commercial Arbitration Rules. The 
            place, or legal seat of arbitration, shall be New York County, New York, and the 
            language of the arbitration shall be English.</p>
          </li>
          <li>
            <p className="mb-2">b. You may only bring claims in your individual capacity on your own behalf, and 
            not in any representative capacity or on behalf of any class or purported class, and 
            no arbitration you commence hereunder may be joined with or include any claims 
            by any other persons. Each party shall be exclusively responsible for paying its 
            own arbitration filing fees, which may later be allocated by the arbitrator as set 
            forth below.</p>
          </li>
          <li>
            <p className="mb-2">c. The arbitrator shall issue a reasoned award and, subject to the limitation of 
            liability set forth above, shall have the power to grant any interim or provisional 
            measures that the arbitrator deems appropriate, including, but not limited to, 
            injunctive relief and specific performance, and any interim or provisional 
            measures ordered by the arbitrator may be specifically enforced by any court of 
            competent jurisdiction as a final award. Nothing herein, however, shall authorize 
            the arbitrator to act as amiable compositeurs, to proceed ex aequo et bono, or to 
            exercise rights of iura novit curia. You and Meme Group each retains the right to 
            seek interim measures from a judicial authority, and any such request shall not be 
            deemed incompatible with the agreement to arbitrate or a waiver of the right to 
            arbitrate. The arbitrator shall award the prevailing party, if any as determined by 
            the arbitrator, its reasonable costs, including reasonable attorney&apos;s fees. Judgment 
            on any award rendered by the arbitrator may be entered in any court of competent 
            jurisdiction. No information concerning an arbitration, beyond the names of the 
            parties, their counsel or the relief requested, may be unilaterally disclosed to a 
            third party by any party unless required by law. Any documentary or other 
            evidence given by any party or witness in any arbitration shall be treated as 
            confidential by any party whose access to such evidence arises exclusively 
            because of its participation in the arbitration and shall not be disclosed to any 
            third party (other than a witness or expert), except as may be required by law. Any 
            party who commences any judicial proceeding in connection with an arbitration 
            initiated hereunder shall endeavor to have the judicial record of any such 
            proceeding sealed to the extent permitted by law.</p>
          </li>
          <li>
            <p className="mb-2">d. YOU AGREE THAT ANY CLAIM YOU MAY HAVE ARISING OUT OF OR 
            RELATED TO YOUR RELATIONSHIP WITH US MUST BE BROUGHT 
            WITHIN ONE (1) YEAR AFTER SUCH CLAIM AROSE; OTHERWISE, 
            YOUR CLAIM WILL BE PERMANENTLY BARRED.</p>
          </li>
        </ol>

        <h2 className="font-bold underline mb-4">14. Remedies</h2>
        <p className="mx-5 mb-4">In addition to any other rights and remedies to which we may be 
        entitled under contract, at law or in equity, in the event that you breach these Terms at any 
        time, your right to copy, display, perform and/or distribute the Associated Artwork and 
        any and all other license rights that you may have under these Terms and Conditions will 
        immediately terminate without any requirement of notice and with no outstanding or 
        ongoing obligation or liability to you. Upon any termination of your license rights 
        hereunder, you will immediately cease all use of any Associated Artwork. We may 
        disable digital-wallet and/or similar functionality(ies) with respect to the affected 
        Associated Artwork, prohibit any platform or service from retrieving or rendering any 
        such Associated Artwork in connection with the services they provide and/or take any 
        other steps to prevent unauthorized use of any Associated Artwork. We will have no 
        obligation or liability to you for any such actions and you will not interfere with, or seek 
        to prevent, any such actions.</p>

        <h2 className="font-bold underline mb-4">15. Miscellaneous</h2>
        <p className="mx-5 mb-4">These Terms do not, and may not be construed to, create any 
        partnership, joint venture or agency relationship between you and Meme Group. If any 
        term, clause or provision of these Terms is held invalid or unenforceable, then that term, 
        clause or provision will be severable from these Terms and will not affect the validity or 
        enforceability of any remaining part of that term, clause or provision, or any other term, 
        clause or provision of these Terms. If Meme Group fails to insist that you perform any of 
        your obligations under these Terms, or if Meme Group does not enforce its rights against 
        you, or if it delays in doing so, that will not mean that Meme Group has waived its rights 
        against you and will not mean that you do not have to comply with those obligations. If 
        Meme Group does waive a default by you, it will only do so in writing, and that will not 
        mean that it will automatically waive any later default by you. These Terms are personal 
        to you, and are not assignable, transferable or sublicensable by you except with Meme 
        Group&apos;s prior written consent, unless otherwise specifically set forth herein. All notices 
        under these Terms will be in writing and will be deemed to have been duly given when 
        received, if personally delivered or sent by certified or registered mail, return receipt 
        requested; when receipt is electronically confirmed, if transmitted by facsimile or e-mail; 
        or the day after it is sent, if sent for next day delivery by recognized overnight delivery 
        service.</p>
        <p className="mx-5 mb-4">Serving as an advisor to Combs Brothers Production LLC is Maven Agency LLC and Michael Shelton, Mission Street Ventures, Brannan Street Ventures, and by and through Reed Smith LLP</p>
      </div>
    </div>
  );
};

export default TermsAndPolicyPage;