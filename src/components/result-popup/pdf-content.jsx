import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import {stylesPdf} from './pdf-content-styles';

function PdfContent() {
    return <Document>

        <Page size="A4" style={stylesPdf.page}>
            <View style={stylesPdf.flexRow}>
            <Text>hello there</Text>
            <Text>hello there 2</Text>
            </View>
            <View style={stylesPdf.flexRow}>
            <Text>hello there</Text>
            <Text>hello there 2</Text>
            </View>
            <View style={stylesPdf.flexRow}>
            <Text>hello there</Text>
            <Text>hello there 2</Text>
            </View>
            <View style={stylesPdf.flexRow}>
            <Text>hello there</Text>
            <Text>hello there 2</Text>
            </View>
            <View style={stylesPdf.flexRow}>
            <Text>hello there</Text>
            <Text>hello there 2</Text>
            </View>
            <View style={stylesPdf.flexRow}>
            <Text>hello there</Text>
            <Text>hello there 2</Text>
            </View>
            <View style={stylesPdf.flexRow}>
            <Text>hello there</Text>
            <Text>hello there 2</Text>
            </View>
            <View style={stylesPdf.flexRow}>
            <Text>hello there</Text>
            <Text>hello there 2</Text>
            </View>
            <View style={stylesPdf.flexRow}>
            <Text>hello there</Text>
            <Text>hello there 2</Text>
            </View>
            <View style={stylesPdf.flexRow}>
            <Text>hello there</Text>
            <Text>hello there 2</Text>
            </View>
            <View style={stylesPdf.flexRow}>
            <Text>hello there</Text>
            <Text>hello there 2</Text>
            </View>
        </Page>
    </Document>
}

export default PdfContent;